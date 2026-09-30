/**
 * zones command group
 * @generated from apis/overlays/pay-per-crawl.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $getcanbeenabled from "./get-can-be-enabled.js";
import $getconfiguration from "./get-configuration.js";
import $setcanbeenabled from "./set-can-be-enabled.js";
import $updateconfiguration from "./update-configuration.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "zones",
	describe: "Operations for pay-per-use.zones",

	builder: (yargs) => {
		return yargs
			.command($getcanbeenabled)
			.command($getconfiguration)
			.command($setcanbeenabled)
			.command($updateconfiguration)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
