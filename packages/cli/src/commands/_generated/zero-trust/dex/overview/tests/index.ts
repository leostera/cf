/**
 * tests command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $list from "./list.js";
import $uniquedevices from "./unique-devices/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "tests",
	describe: "Operations for dex.overview.tests",

	builder: (yargs) => {
		return yargs
			.command($list)
			.command($uniquedevices)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
