/**
 * outages command group
 * @generated from apis/overlays/radar.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $locations from "./locations.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "outages",
	describe: "Operations for annotations.outages",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($locations)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
