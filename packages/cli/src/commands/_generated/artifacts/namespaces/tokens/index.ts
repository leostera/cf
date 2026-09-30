/**
 * tokens command group
 * @generated from apis/overlays/artifacts.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $revoke from "./revoke.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "tokens",
	describe: "Operations for namespaces.tokens",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($revoke)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
