/**
 * advanced-dns-protection command group
 * @generated from apis/overlays/magic-transit.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $configs from "./configs/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "advanced-dns-protection",
	describe: "Advanced Dns Protection operations",

	builder: (yargs) => {
		return yargs
			.command($configs)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
