/**
 * origin-post-quantum-encryption command
 * @generated from apis/overlays/origin-post-quantum-encryption.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "origin-post-quantum-encryption",
	describe:
		"Enable post-quantum key exchange for connections between Cloudflare and your origin server",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
