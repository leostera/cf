/**
 * articles command group
 * @generated from apis/overlays/cloudforce-one.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $bulkmarkread from "./bulk-mark-read.js";
import $get from "./get.js";
import $getcontent from "./get-content.js";
import $list from "./list.js";
import $markread from "./mark-read.js";
import $skills from "./skills/index.js";
import $tags from "./tags/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "articles",
	describe: "Operations for threat-signals.articles",

	builder: (yargs) => {
		return yargs
			.command($bulkmarkread)
			.command($get)
			.command($getcontent)
			.command($list)
			.command($markread)
			.command($skills)
			.command($tags)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
