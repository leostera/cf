/**
 * workflows command
 * @generated from apis/overlays/workflows.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $instances from "./instances/index.js";
import $settings from "./settings/index.js";
import $versions from "./versions/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "workflows",
	describe:
		"Durable, multi-step workflows that run on Workers with automatic retries and state persistence",

	builder: (yargs) => {
		return yargs
			.command($delete)
			.command($get)
			.command($list)
			.command($instances)
			.command($settings)
			.command($versions)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
