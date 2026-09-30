/**
 * categories command group
 * @generated from apis/overlays/cloudforce-one.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $getbyid from "./get-by-id.js";
import $patch from "./patch.js";
import $actors from "./actors/index.js";
import $create from "./create/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "categories",
	describe: "Operations for events.tags.categories",

	builder: (yargs) => {
		return yargs
			.command($delete)
			.command($get)
			.command($getbyid)
			.command($patch)
			.command($actors)
			.command($create)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
