/**
 * legal-response command group
 * @generated from apis/overlays/cloudforce-one.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $accesscheck from "./access-check.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "legal-response",
	describe: "Operations for requests.legal-response",

	builder: (yargs) => {
		return yargs
			.command($accesscheck)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
