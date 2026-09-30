/**
 * vpc-flows command group
 * @generated from apis/overlays/magic-network-monitoring.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $tokens from "./tokens/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "vpc-flows",
	describe:
		"Ingest VPC flow logs from cloud providers for network visibility and anomaly detection",

	builder: (yargs) => {
		return yargs
			.command($tokens)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
