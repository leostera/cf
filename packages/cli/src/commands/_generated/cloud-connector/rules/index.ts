/**
 * rules command group
 * @generated from apis/overlays/cloud-connector.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $list from "./list.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "rules",
	describe:
		"Routing rules that map request patterns to cloud provider endpoints",

	builder: (yargs) => {
		return yargs
			.command($list)
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
