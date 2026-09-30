/**
 * apps command group
 * @generated from apis/overlays/flagship.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $update from "./update.js";
import $definitions from "./definitions/index.js";
import $evaluate from "./evaluate/index.js";
import $flags from "./flags/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "apps",
	describe: "Operations for apps",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.command($list)
			.command($update)
			.command($definitions)
			.command($evaluate)
			.command($flags)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
