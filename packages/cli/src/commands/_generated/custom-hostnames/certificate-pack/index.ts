/**
 * certificate-pack command group
 * @generated from apis/overlays/custom-hostnames.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $certificates from "./certificates/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "certificate-pack",
	describe: "Operations for certificate-pack",

	builder: (yargs) => {
		return yargs
			.command($certificates)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
