/**
 * workers-for-platforms command
 * @generated from apis/overlays/workers-for-platforms.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $dispatchnamespaces from "./dispatch-namespaces/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "workers-for-platforms",
	describe: "workers-for-platforms",

	builder: (yargs) => {
		return yargs
			.command($dispatchnamespaces)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
