/**
 * relays command group
 * @generated from apis/overlays/realtime.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $update from "./update.js";
import $tokens from "./tokens/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "relays",
	describe:
		"Relays are isolated MoQ scopes that carry media between publishers and subscribers",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.command($list)
			.command($update)
			.command($tokens)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
