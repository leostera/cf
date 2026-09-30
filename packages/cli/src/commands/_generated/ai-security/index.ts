/**
 * ai-security command
 * @generated from apis/overlays/ai-security.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $update from "./update.js";
import $customtopics from "./custom-topics/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "ai-security",
	describe:
		"Detect prompt injection, PII, and unsafe topics in traffic to your AI applications",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($update)
			.command($customtopics)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
