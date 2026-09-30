import { runInTempDir } from "@cloudflare/workers-utils/test-helpers";
import { http, HttpResponse } from "msw";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { server, setupMsw, TEST_BASE_URL } from "../helpers/msw.js";
import { runCf } from "../helpers/run-cf.js";

describe("cf previews delete", () => {
	runInTempDir();
	setupMsw();

	const env = {
		CLOUDFLARE_API_TOKEN: "test-token",
		CLOUDFLARE_API_BASE_URL: TEST_BASE_URL,
		CLOUDFLARE_ACCOUNT_ID: "test-account",
	};
	let log: ReturnType<typeof vi.spyOn>;
	let out: ReturnType<typeof vi.spyOn>;
	let err: ReturnType<typeof vi.spyOn>;

	beforeEach(() => {
		log = vi.spyOn(console, "log").mockImplementation(() => {});
		out = vi.spyOn(process.stdout, "write").mockImplementation(() => true);
		err = vi.spyOn(process.stderr, "write").mockImplementation(() => true);
	});

	afterEach(() => {
		log.mockRestore();
		out.mockRestore();
		err.mockRestore();
	});

	function stderr() {
		return err.mock.calls.map((call: unknown[]) => String(call[0])).join("");
	}

	it("deletes by name and encodes path values without forcing referenced deletion", async () => {
		let request: Request | undefined;
		server.use(
			http.delete(
				`${TEST_BASE_URL}/accounts/test-account/workers/workers/:worker/previews/:preview`,
				({ request: received }) => {
					request = received;
					return HttpResponse.json({ success: true, result: null });
				}
			)
		);

		const result = await runCf(
			[
				"previews",
				"delete",
				"Feature Branch/One",
				"--worker",
				"my-worker",
				"--force",
			],
			env
		);

		expect(result.exitCode).toBe(0);
		expect(request?.url).toBe(
			`${TEST_BASE_URL}/accounts/test-account/workers/workers/my-worker/previews/Feature%20Branch%2FOne`
		);
		expect(request?.headers.get("authorization")).toBe("Bearer test-token");
		expect(await request?.text()).toBe("");
		expect(log).not.toHaveBeenCalled();
	});

	it("sends API force only when --delete-with-references is specified", async () => {
		let url: URL | undefined;
		server.use(
			http.delete(
				`${TEST_BASE_URL}/accounts/test-account/workers/workers/:worker/previews/:preview`,
				({ request }) => {
					url = new URL(request.url);
					return HttpResponse.json({ success: true, result: null });
				}
			)
		);

		await runCf(
			[
				"previews",
				"delete",
				"feature",
				"--worker",
				"my-worker",
				"--force",
				"--delete-with-references",
			],
			env
		);

		expect(url?.searchParams.get("force")).toBe("true");
		expect(url?.searchParams.has("delete-with-references")).toBe(false);
	});

	it("requires confirmation even with --delete-with-references", async () => {
		await runCf(
			[
				"previews",
				"delete",
				"feature",
				"--worker",
				"my-worker",
				"--delete-with-references",
			],
			env
		);

		expect(stderr()).toContain("Aborted.");
	});

	it("previews the encoded DELETE URL without making a request", async () => {
		await runCf(
			[
				"previews",
				"delete",
				"feature/branch",
				"--worker",
				"my-worker",
				"--dry-run",
			],
			env
		);

		const output = log.mock.calls
			.map((call: unknown[]) => String(call[0]))
			.join("\n");
		expect(output).toContain("DELETE");
		expect(output).toContain("/previews/feature%2Fbranch");
	});

	it("shows generated deletion and the existing deployment in root help", async () => {
		await runCf(["previews", "--help"], env);

		const output =
			out.mock.calls.map((call: unknown[]) => String(call[0])).join("") +
			log.mock.calls.map((call: unknown[]) => String(call[0])).join("\n");
		expect(output).toContain("previews delete <name>");
		expect(output).toContain("previews deploy [preview-name]");
	});

	it("keeps local mode unavailable for Preview deployment", async () => {
		await expect(
			runCf(["previews", "deploy", "feature", "--local"], env)
		).rejects.toThrow("--local is not supported by cf previews deploy.");
	});
});
