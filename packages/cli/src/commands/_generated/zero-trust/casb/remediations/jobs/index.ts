/**
 * jobs command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $export from "./export.js";
import $list from "./list.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "jobs",
	describe: "Operations for casb.remediations.jobs",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($export)
			.command($list)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
