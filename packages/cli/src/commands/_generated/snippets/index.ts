/**
 * snippets command
 * @generated from apis/overlays/snippets.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $update from "./update.js";
import $content from "./content/index.js";
import $rules from "./rules/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "snippets",
	describe: "snippets",

	builder: (yargs) => {
		return yargs
			.command($delete)
			.command($get)
			.command($list)
			.command($update)
			.command($content)
			.command($rules)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
