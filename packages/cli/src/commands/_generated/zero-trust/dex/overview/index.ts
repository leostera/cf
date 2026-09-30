/**
 * overview command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $tests from "./tests/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "overview",
	describe: "Operations for dex.overview",

	builder: (yargs) => {
		return yargs
			.command($tests)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
