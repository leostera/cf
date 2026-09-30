/**
 * history command group
 * @generated from apis/overlays/pages.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $logs from "./logs/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "history",
	describe: "Operations for deployments.history",

	builder: (yargs) => {
		return yargs.command($logs).demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
