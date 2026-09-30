/**
 * google-tag-gateway command
 * @generated from apis/overlays/google-tag-gateway.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $config from "./config/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "google-tag-gateway",
	describe: "Google Tag Gateway operations",

	builder: (yargs) => {
		return yargs
			.command($config)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
