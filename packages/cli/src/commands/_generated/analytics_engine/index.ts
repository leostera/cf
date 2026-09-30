/**
 * analytics_engine command
 * @generated from apis/overlays/analytics_engine.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $sql from "./sql/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "analytics_engine",
	describe: "analytics_engine",

	builder: (yargs) => {
		return yargs.command($sql).demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
