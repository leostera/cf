/**
 * durable-objects command
 * @generated from apis/overlays/durable-objects.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $namespaces from "./namespaces/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "durable-objects",
	describe: "durable-objects",

	builder: (yargs) => {
		return yargs
			.command($namespaces)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
