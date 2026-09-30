/**
 * top command group
 * @generated from apis/overlays/radar.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $prefixes from "./prefixes.js";
import $ases from "./ases/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "top",
	describe: "Operations for bgp.top",

	builder: (yargs) => {
		return yargs
			.command($prefixes)
			.command($ases)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
