/**
 * get command group
 * @generated from apis/overlays/cloudforce-one.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $indicator from "./indicator.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "get",
	describe: "Operations for events.dataset.indicators.get",

	builder: (yargs) => {
		return yargs
			.command($indicator)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
