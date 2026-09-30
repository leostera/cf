/**
 * health command
 * @generated from apis/overlays/health.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "health",
	describe: "health",

	builder: (yargs) => {
		return yargs

			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
