/**
 * scim command
 * @generated from apis/overlays/scim.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $groups from "./groups/index.js";
import $resourcetypes from "./resource-types/index.js";
import $schemas from "./schemas/index.js";
import $serviceproviderconfig from "./service-provider-config/index.js";
import $users from "./users/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "scim",
	describe:
		"SCIM 2.0 provisioning — manage users, groups, and identity provider sync for your account",

	builder: (yargs) => {
		return yargs
			.command($groups)
			.command($resourcetypes)
			.command($schemas)
			.command($serviceproviderconfig)
			.command($users)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
