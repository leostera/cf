/**
 * hyperdrive command
 * @generated from apis/overlays/hyperdrive.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $replace from "./replace.js";
import $restart from "./restart.js";
import $update from "./update.js";
import $integration from "./integration/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "hyperdrive",
	describe:
		"Accelerate access to existing databases by caching queries and pooling connections at the edge",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.command($list)
			.command($replace)
			.command($restart)
			.command($update)
			.command($integration)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
