/**
 * transcripts command group
 * @generated from apis/overlays/realtime.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $export from "./export.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "transcripts",
	describe: "Transcripts from historical RealtimeKit sessions",

	builder: (yargs) => {
		return yargs
			.command($export)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
