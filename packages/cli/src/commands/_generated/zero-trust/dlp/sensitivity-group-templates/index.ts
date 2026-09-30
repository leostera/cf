/**
 * sensitivity-group-templates command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $list from "./list.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "sensitivity-group-templates",
	describe:
		"Data Loss Prevention - browse templates for creating sensitivity groups",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($list)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
