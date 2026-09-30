/**
 * resource-types command group
 * @generated from apis/overlays/scim.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $list from "./list.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "resource-types",
	describe: "Resource Types operations",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($list)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
