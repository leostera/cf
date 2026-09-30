/**
 * alerting command
 * @generated from apis/overlays/alerting.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $availablealerts from "./available-alerts/index.js";
import $destinations from "./destinations/index.js";
import $history from "./history/index.js";
import $policies from "./policies/index.js";
import $silences from "./silences/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "alerting",
	describe: "alerting",

	builder: (yargs) => {
		return yargs
			.command($availablealerts)
			.command($destinations)
			.command($history)
			.command($policies)
			.command($silences)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
