/**
 * images command
 * @generated from apis/overlays/images.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $directupload from "./direct-upload.js";
import $edit from "./edit.js";
import $get from "./get.js";
import $getblob from "./get-blob.js";
import $list from "./list.js";
import $stats from "./stats.js";
import $flows from "./flows/index.js";
import $import from "./import/index.js";
import $keys from "./keys/index.js";
import $variants from "./variants/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "images",
	describe:
		"Store, resize, and deliver optimized images globally — variants, signing keys, and direct uploads",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($directupload)
			.command($edit)
			.command($get)
			.command($getblob)
			.command($list)
			.command($stats)
			.command($flows)
			.command($import)
			.command($keys)
			.command($variants)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
