/**
 * discovery command group
 * @generated from apis/overlays/web-assets.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $operations from "./operations/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "discovery",
	describe: "Operations for discovery",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($operations)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
