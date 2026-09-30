/**
 * cloudflare-source command group
 * @generated from apis/overlays/network.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $edit from "./edit.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "cloudflare-source",
	describe: "Operations for subnets.cloudflare-source",

	builder: (yargs) => {
		return yargs.command($edit).demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
