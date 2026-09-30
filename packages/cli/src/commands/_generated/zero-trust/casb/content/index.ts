/**
 * content command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $export from "./export.js";
import $list from "./list.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "content",
	describe: "Operations for casb.content",

	builder: (yargs) => {
		return yargs
			.command($export)
			.command($list)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
