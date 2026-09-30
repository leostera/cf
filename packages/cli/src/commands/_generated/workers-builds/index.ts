/**
 * workers-builds command
 * @generated from apis/overlays/workers-builds.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $workers from "./workers/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "workers-builds",
	describe: "workers-builds",

	builder: (yargs) => {
		return yargs
			.command($workers)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
