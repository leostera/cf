/**
 * authenticators command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $delete from "./delete.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "authenticators",
	describe: "Operations for users.mfa.authenticators",

	builder: (yargs) => {
		return yargs
			.command($delete)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
