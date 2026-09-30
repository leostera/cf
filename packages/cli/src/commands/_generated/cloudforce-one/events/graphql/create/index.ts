/**
 * create command group
 * @generated from apis/overlays/cloudforce-one.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $graph from "./graph/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "create",
	describe: "Operations for events.graphql.create",

	builder: (yargs) => {
		return yargs
			.command($graph)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
