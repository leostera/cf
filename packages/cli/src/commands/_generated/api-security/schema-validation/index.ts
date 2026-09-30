/**
 * schema-validation command group
 * @generated from apis/overlays/api-security.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $schemas from "./schemas/index.js";
import $settings from "./settings/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "schema-validation",
	describe: "Operations for schema-validation",

	builder: (yargs) => {
		return yargs
			.command($schemas)
			.command($settings)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
