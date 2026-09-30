/**
 * webhooks command group
 * @generated from apis/overlays/stream.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "webhooks",
	describe:
		"Webhook notifications for video lifecycle events (ready, error, etc.)",

	builder: (yargs) => {
		return yargs
			.command($delete)
			.command($get)
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
