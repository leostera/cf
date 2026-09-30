/**
 * bot-management command
 * @generated from apis/overlays/bot-management.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $update from "./update.js";
import $feedback from "./feedback/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "bot-management",
	describe: "bot-management",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($update)
			.command($feedback)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
