/**
 * credentials command group
 * @generated from apis/overlays/basin-catalog.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $status from "./status.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "credentials",
	describe:
		"Catalog access credentials for external query engines (Spark, Trino, etc.)",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($status)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
