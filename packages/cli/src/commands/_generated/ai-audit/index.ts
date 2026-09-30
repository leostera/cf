/**
 * ai-audit command
 * @generated from apis/overlays/ai-audit.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $robots from "./robots/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "ai-audit",
	describe: "ai-audit",

	builder: (yargs) => {
		return yargs
			.command($robots)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
