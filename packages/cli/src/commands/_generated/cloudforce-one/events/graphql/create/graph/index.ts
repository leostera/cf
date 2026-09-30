/**
 * graph command group
 * @generated from apis/overlays/cloudforce-one.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $ql from "./ql.js";
import $qlv2 from "./qlv2.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "graph",
	describe: "Operations for events.graphql.create.graph",

	builder: (yargs) => {
		return yargs
			.command($ql)
			.command($qlv2)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
