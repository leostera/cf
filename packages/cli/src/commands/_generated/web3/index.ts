/**
 * web3 command
 * @generated from apis/overlays/web3.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $hostnames from "./hostnames/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "web3",
	describe: "web3",

	builder: (yargs) => {
		return yargs
			.command($hostnames)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
