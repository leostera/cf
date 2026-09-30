/**
 * roas command group
 * @generated from apis/overlays/radar.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $timeseries from "./timeseries.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "roas",
	describe: "Operations for bgp.rpki.roas",

	builder: (yargs) => {
		return yargs
			.command($timeseries)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
