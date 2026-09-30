/**
 * netflows command group
 * @generated from apis/overlays/radar.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $summaryv2 from "./summary-v2.js";
import $timeseries from "./timeseries.js";
import $timeseriesgroups from "./timeseries-groups.js";
import $top from "./top/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "netflows",
	describe: "Network-layer traffic flow data and volumetric trend analysis",

	builder: (yargs) => {
		return yargs
			.command($summaryv2)
			.command($timeseries)
			.command($timeseriesgroups)
			.command($top)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
