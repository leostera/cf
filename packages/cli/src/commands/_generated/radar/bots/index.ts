/**
 * bots command group
 * @generated from apis/overlays/radar.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $list from "./list.js";
import $summary from "./summary.js";
import $timeseries from "./timeseries.js";
import $timeseriesgroups from "./timeseries-groups.js";
import $webcrawlers from "./web-crawlers/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "bots",
	describe:
		"Internet-wide bot traffic trends, categories, and distribution statistics",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($list)
			.command($summary)
			.command($timeseries)
			.command($timeseriesgroups)
			.command($webcrawlers)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
