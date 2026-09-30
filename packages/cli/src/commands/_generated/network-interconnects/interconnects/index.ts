/**
 * interconnects command group
 * @generated from apis/overlays/network-interconnects.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $loa from "./loa.js";
import $loadefaultname from "./loa-default-name.js";
import $status from "./status.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "interconnects",
	describe:
		"Physical cross-connect and partner interconnect sessions with LOA and status tracking",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.command($list)
			.command($loa)
			.command($loadefaultname)
			.command($status)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
