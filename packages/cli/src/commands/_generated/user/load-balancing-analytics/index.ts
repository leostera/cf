/**
 * load-balancing-analytics command group
 * @generated from apis/overlays/user.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $events from "./events/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "load-balancing-analytics",
	describe: "Operations for load-balancing-analytics",

	builder: (yargs) => {
		return yargs
			.command($events)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
