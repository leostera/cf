/**
 * configurations command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $edit from "./edit.js";
import $get from "./get.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "configurations",
	describe: "Operations for gateway.configurations",

	builder: (yargs) => {
		return yargs
			.command($edit)
			.command($get)
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
