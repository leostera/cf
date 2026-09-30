/**
 * certificates command group
 * @generated from apis/overlays/custom-hostnames.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $delete from "./delete.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "certificates",
	describe: "Operations for certificate-pack.certificates",

	builder: (yargs) => {
		return yargs
			.command($delete)
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
