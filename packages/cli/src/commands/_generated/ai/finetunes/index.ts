/**
 * finetunes command group
 * @generated from apis/overlays/ai.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $list from "./list.js";
import $assets from "./assets/index.js";
import $public from "./public/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "finetunes",
	describe: "Operations for finetunes",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($list)
			.command($assets)
			.command($public)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
