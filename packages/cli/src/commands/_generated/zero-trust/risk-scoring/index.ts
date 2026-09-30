/**
 * risk-scoring command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $reset from "./reset.js";
import $behaviours from "./behaviours/index.js";
import $integrations from "./integrations/index.js";
import $summary from "./summary/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "risk-scoring",
	describe: "User Risk Scoring - retrieve and reset user risk scores",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($reset)
			.command($behaviours)
			.command($integrations)
			.command($summary)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
