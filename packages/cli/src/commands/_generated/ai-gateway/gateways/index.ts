/**
 * gateways command group
 * @generated from apis/overlays/ai-gateway.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $geturl from "./get-url.js";
import $list from "./list.js";
import $update from "./update.js";
import $providers from "./providers/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "gateways",
	describe: "Create and configure AI Gateways for an account",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.command($geturl)
			.command($list)
			.command($update)
			.command($providers)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
