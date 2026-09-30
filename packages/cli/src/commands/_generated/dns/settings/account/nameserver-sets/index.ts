/**
 * nameserver-sets command group
 * @generated from apis/overlays/dns.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "nameserver-sets",
	describe: "Operations for settings.account.nameserver-sets",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.command($list)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
