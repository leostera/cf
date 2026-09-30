/**
 * top command group
 * @generated from apis/overlays/radar.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $attacks from "./attacks.js";
import $locations from "./locations/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "top",
	describe: "Operations for attacks.layer3.top",

	builder: (yargs) => {
		return yargs
			.command($attacks)
			.command($locations)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
