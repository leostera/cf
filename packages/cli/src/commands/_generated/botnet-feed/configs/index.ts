/**
 * configs command group
 * @generated from apis/overlays/botnet-feed.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $asn from "./asn/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "configs",
	describe:
		"Botnet feed subscription configuration and notification preferences",

	builder: (yargs) => {
		return yargs.command($asn).demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
