/**
 * cloud-connector command
 * @generated from apis/overlays/cloud-connector.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $rules from "./rules/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "cloud-connector",
	describe:
		"Route traffic from Cloudflare directly to cloud provider services (AWS, Azure, GCP) without origin servers",

	builder: (yargs) => {
		return yargs
			.command($rules)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
