/**
 * profiles command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $custom from "./custom/index.js";
import $default from "./default/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "profiles",
	describe: "Operations for devices.profiles",

	builder: (yargs) => {
		return yargs
			.command($custom)
			.command($default)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
