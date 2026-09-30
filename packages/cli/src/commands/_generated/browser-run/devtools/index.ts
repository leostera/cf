/**
 * devtools command group
 * @generated from apis/overlays/browser-run.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $browser from "./browser/index.js";
import $json from "./json/index.js";
import $session from "./session/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "devtools",
	describe: "Operations for devtools",

	builder: (yargs) => {
		return yargs
			.command($browser)
			.command($json)
			.command($session)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
