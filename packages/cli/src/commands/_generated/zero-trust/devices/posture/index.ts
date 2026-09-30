/**
 * posture command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $integrations from "./integrations/index.js";
import $rules from "./rules/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "posture",
	describe: "Operations for devices.posture",

	builder: (yargs) => {
		return yargs
			.command($integrations)
			.command($rules)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
