/**
 * tags command group
 * @generated from apis/overlays/cloudforce-one.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $getbyid from "./get-by-id.js";
import $patch from "./patch.js";
import $categories from "./categories/index.js";
import $relationships from "./relationships/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "tags",
	describe: "Operations for events.tags",

	builder: (yargs) => {
		return yargs
			.command($delete)
			.command($get)
			.command($getbyid)
			.command($patch)
			.command($categories)
			.command($relationships)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
