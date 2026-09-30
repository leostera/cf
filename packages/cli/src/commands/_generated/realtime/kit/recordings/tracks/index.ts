/**
 * tracks command group
 * @generated from apis/overlays/realtime.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $start from "./start.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "tracks",
	describe: "Participant-track recordings for RealtimeKit meetings",

	builder: (yargs) => {
		return yargs
			.command($start)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
