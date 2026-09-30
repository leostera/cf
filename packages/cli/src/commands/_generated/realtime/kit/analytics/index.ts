/**
 * analytics command group
 * @generated from apis/overlays/realtime.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $livestreams from "./livestreams/index.js";
import $usage from "./usage/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "analytics",
	describe: "Usage and livestream analytics for RealtimeKit applications",

	builder: (yargs) => {
		return yargs
			.command($livestreams)
			.command($usage)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
