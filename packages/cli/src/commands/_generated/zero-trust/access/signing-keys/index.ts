/**
 * signing-keys command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $rotate from "./rotate.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "signing-keys",
	describe: "Operations for access.signing-keys",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($rotate)
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
