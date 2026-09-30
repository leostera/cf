/**
 * origin command group
 * @generated from apis/overlays/radar.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $summary from "./summary.js";
import $timeseriesgroups from "./timeseries-groups.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "origin",
	describe: "Operations for post-quantum.origin",

	builder: (yargs) => {
		return yargs
			.command($summary)
			.command($timeseriesgroups)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
