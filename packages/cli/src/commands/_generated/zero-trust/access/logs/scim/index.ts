/**
 * scim command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $updates from "./updates/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "scim",
	describe: "Operations for access.logs.scim",

	builder: (yargs) => {
		return yargs
			.command($updates)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
