/**
 * operations command group
 * @generated from apis/overlays/web-assets.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "operations",
	describe: "Operations for labels.user.operations",

	builder: (yargs) => {
		return yargs
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
