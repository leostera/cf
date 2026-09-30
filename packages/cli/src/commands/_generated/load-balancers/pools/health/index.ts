/**
 * health command group
 * @generated from apis/overlays/load-balancers.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $get from "./get.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "health",
	describe:
		"Origin server pools with weighted traffic distribution, health thresholds, and geographic preferences",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($get)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
