/**
 * workflow command group
 * @generated from apis/overlays/zaraz.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "workflow",
	describe:
		"Workflow state for Zaraz configuration changes (draft vs. published)",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
