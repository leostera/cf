/**
 * test-results command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $http from "./http/index.js";
import $traceroute from "./traceroute/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "test-results",
	describe: "Operations for dex.test-results",

	builder: (yargs) => {
		return yargs
			.command($http)
			.command($traceroute)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
