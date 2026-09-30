/**
 * argo command
 * @generated from apis/overlays/argo.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $smartrouting from "./smart-routing/index.js";
import $tieredcaching from "./tiered-caching/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "argo",
	describe:
		"Network optimization features that speed up and improve reliability of traffic to your origins",

	builder: (yargs) => {
		return yargs
			.command($smartrouting)
			.command($tieredcaching)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
