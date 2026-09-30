/**
 * users command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $mfa from "./mfa/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "users",
	describe: "Operations for users",

	builder: (yargs) => {
		return yargs.command($mfa).demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
