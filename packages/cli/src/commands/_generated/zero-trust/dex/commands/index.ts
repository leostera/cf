/**
 * commands command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $list from "./list.js";
import $eligibledevices from "./eligible-devices/index.js";
import $quota from "./quota/index.js";
import $results from "./results/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "commands",
	describe: "Operations for dex.commands",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($list)
			.command($eligibledevices)
			.command($quota)
			.command($results)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
