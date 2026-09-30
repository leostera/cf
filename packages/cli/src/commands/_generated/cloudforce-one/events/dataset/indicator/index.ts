/**
 * indicator command group
 * @generated from apis/overlays/cloudforce-one.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $types from "./types/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "indicator",
	describe: "Operations for events.dataset.indicator",

	builder: (yargs) => {
		return yargs
			.command($types)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
