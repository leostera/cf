/**
 * bulk command group
 * @generated from apis/overlays/cloudforce-one.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $patch from "./patch.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "bulk",
	describe: "Operations for events.update.bulk",

	builder: (yargs) => {
		return yargs
			.command($patch)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
