/**
 * block-senders command group
 * @generated from apis/overlays/email-security.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $batch from "./batch.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $edit from "./edit.js";
import $get from "./get.js";
import $list from "./list.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "block-senders",
	describe: "Operations for block-senders",

	builder: (yargs) => {
		return yargs
			.command($batch)
			.command($create)
			.command($delete)
			.command($edit)
			.command($get)
			.command($list)
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
