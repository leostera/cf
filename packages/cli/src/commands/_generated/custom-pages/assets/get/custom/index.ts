/**
 * custom command group
 * @generated from apis/overlays/custom-pages.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $asset from "./asset.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "custom",
	describe: "Operations for assets.get.custom",

	builder: (yargs) => {
		return yargs
			.command($asset)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
