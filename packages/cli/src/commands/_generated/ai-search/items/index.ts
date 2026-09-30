/**
 * items command group
 * @generated from apis/overlays/ai-search.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $chunks from "./chunks.js";
import $delete from "./delete.js";
import $download from "./download.js";
import $get from "./get.js";
import $list from "./list.js";
import $logs from "./logs.js";
import $sync from "./sync.js";
import $upload from "./upload.js";
import $upsert from "./upsert.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "items",
	describe: "Content indexed by AI Search instances",

	builder: (yargs) => {
		return yargs
			.command($chunks)
			.command($delete)
			.command($download)
			.command($get)
			.command($list)
			.command($logs)
			.command($sync)
			.command($upload)
			.command($upsert)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
