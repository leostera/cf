/**
 * planetscale command group
 * @generated from apis/overlays/hyperdrive.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $signature from "./signature.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "planetscale",
	describe: "Operations for integration.planetscale",

	builder: (yargs) => {
		return yargs
			.command($signature)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
