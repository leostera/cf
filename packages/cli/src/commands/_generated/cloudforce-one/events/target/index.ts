/**
 * target command group
 * @generated from apis/overlays/cloudforce-one.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $industries from "./industries/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "target",
	describe: "Operations for events.target",

	builder: (yargs) => {
		return yargs
			.command($industries)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
