/**
 * rules command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $bulkedit from "./bulk-edit.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "rules",
	describe:
		"Data Loss Prevention - manage outbound email scanning rules and their priorities",

	builder: (yargs) => {
		return yargs
			.command($bulkedit)
			.command($create)
			.command($delete)
			.command($get)
			.command($list)
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
