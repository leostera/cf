/**
 * firewall command group
 * @generated from apis/overlays/user.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $accessrules from "./access-rules/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "firewall",
	describe: "Firewall operations",

	builder: (yargs) => {
		return yargs
			.command($accessrules)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
