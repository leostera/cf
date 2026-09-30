/**
 * batch command group
 * @generated from apis/overlays/organization.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "batch",
	describe: "Operations for member.batch",

	builder: (yargs) => {
		return yargs
			.command($create)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
