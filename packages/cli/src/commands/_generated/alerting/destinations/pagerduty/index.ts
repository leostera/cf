/**
 * pagerduty command group
 * @generated from apis/overlays/alerting.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $link from "./link.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "pagerduty",
	describe: "Operations for destinations.pagerduty",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.command($link)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
