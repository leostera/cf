/**
 * domains command group
 * @generated from apis/overlays/intel.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $bulks from "./bulks/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "domains",
	describe:
		"Domain intelligence — risk scores, categories, and associated infrastructure",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($bulks)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
