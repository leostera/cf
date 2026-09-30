/**
 * custom-nameservers command
 * @generated from apis/overlays/custom-nameservers.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "custom-nameservers",
	describe: "custom-nameservers",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
