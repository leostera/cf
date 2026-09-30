/**
 * mfa command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $authenticators from "./authenticators/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "mfa",
	describe: "Operations for users.mfa",

	builder: (yargs) => {
		return yargs
			.command($authenticators)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
