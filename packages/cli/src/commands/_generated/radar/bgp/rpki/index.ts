/**
 * rpki command group
 * @generated from apis/overlays/radar.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $aspa from "./aspa/index.js";
import $roas from "./roas/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "rpki",
	describe: "Operations for bgp.rpki",

	builder: (yargs) => {
		return yargs
			.command($aspa)
			.command($roas)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
