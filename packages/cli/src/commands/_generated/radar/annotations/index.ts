/**
 * annotations command group
 * @generated from apis/overlays/radar.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $list from "./list.js";
import $outages from "./outages/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "annotations",
	describe:
		"Radar annotations marking significant Internet events (outages, cable cuts, etc.)",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($list)
			.command($outages)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
