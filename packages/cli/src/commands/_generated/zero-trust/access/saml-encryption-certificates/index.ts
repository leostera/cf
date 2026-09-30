/**
 * saml-encryption-certificates command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $getpem from "./get-pem.js";
import $list from "./list.js";
import $rotate from "./rotate.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "saml-encryption-certificates",
	describe: "Operations for access.saml-encryption-certificates",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($getpem)
			.command($list)
			.command($rotate)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
