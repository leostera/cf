/**
 * content-lists command group
 * @generated from apis/overlays/web3.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $update from "./update.js";
import $entries from "./entries/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "content-lists",
	describe: "Operations for hostnames.ipfs-universal-paths.content-lists",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($update)
			.command($entries)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
