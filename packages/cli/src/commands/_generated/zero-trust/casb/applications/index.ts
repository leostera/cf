/**
 * applications command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $list from "./list.js";
import $authmethods from "./auth-methods/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "applications",
	describe: "Operations for casb.applications",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($list)
			.command($authmethods)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
