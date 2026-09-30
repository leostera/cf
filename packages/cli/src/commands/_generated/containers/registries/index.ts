/**
 * registries command group
 * @generated from apis/overlays/containers.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $list from "./list.js";
import $credentials from "./credentials/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "registries",
	describe: "Manage Containers image registries",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($list)
			.command($credentials)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
