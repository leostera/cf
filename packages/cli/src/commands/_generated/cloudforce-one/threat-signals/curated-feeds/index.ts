/**
 * curated-feeds command group
 * @generated from apis/overlays/cloudforce-one.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $list from "./list.js";
import $optout from "./opt-out.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "curated-feeds",
	describe: "Operations for threat-signals.curated-feeds",

	builder: (yargs) => {
		return yargs
			.command($list)
			.command($optout)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
