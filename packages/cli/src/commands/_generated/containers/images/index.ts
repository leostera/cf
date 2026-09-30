/**
 * images command group
 * @generated from apis/overlays/containers.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $delete from "#commands/containers/images/delete/index.js";
import $list from "#commands/containers/images/list/index.js";
import $prepare from "./prepare.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "images",
	describe: "Operations for images",

	builder: (yargs) => {
		return yargs
			.command($delete)
			.command($list)
			.command($prepare)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
