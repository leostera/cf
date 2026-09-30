/**
 * turn command group
 * @generated from apis/overlays/realtime.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $keys from "./keys/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "turn",
	describe: "TURN keys that help clients traverse NATs and firewalls",

	builder: (yargs) => {
		return yargs.command($keys).demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
