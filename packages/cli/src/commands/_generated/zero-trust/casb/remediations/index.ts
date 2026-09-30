/**
 * remediations command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $jobs from "./jobs/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "remediations",
	describe: "Operations for casb.remediations",

	builder: (yargs) => {
		return yargs.command($jobs).demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
