/**
 * top command group
 * @generated from apis/overlays/radar.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $ases from "./ases.js";
import $locations from "./locations.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "top",
	describe: "Operations for netflows.top",

	builder: (yargs) => {
		return yargs
			.command($ases)
			.command($locations)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
