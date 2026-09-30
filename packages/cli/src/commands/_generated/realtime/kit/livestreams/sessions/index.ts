/**
 * sessions command group
 * @generated from apis/overlays/realtime.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $listactive from "./list-active.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "sessions",
	describe: "Sessions for RealtimeKit livestreams",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($listactive)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
