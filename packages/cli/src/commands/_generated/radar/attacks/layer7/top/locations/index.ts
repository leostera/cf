/**
 * locations command group
 * @generated from apis/overlays/radar.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $origin from "./origin.js";
import $target from "./target.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "locations",
	describe: "Operations for attacks.layer7.top.locations",

	builder: (yargs) => {
		return yargs
			.command($origin)
			.command($target)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
