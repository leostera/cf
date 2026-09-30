/**
 * token-validation command group
 * @generated from apis/overlays/api-security.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $configurations from "./configurations/index.js";
import $rules from "./rules/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "token-validation",
	describe: "Operations for token-validation",

	builder: (yargs) => {
		return yargs
			.command($configurations)
			.command($rules)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
