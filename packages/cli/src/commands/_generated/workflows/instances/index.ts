/**
 * instances command group
 * @generated from apis/overlays/workflows.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $pause from "./pause.js";
import $restart from "./restart.js";
import $resume from "./resume.js";
import $subscribe from "./subscribe.js";
import $terminate from "./terminate.js";
import $batch from "./batch/index.js";
import $events from "./events/index.js";
import $step from "./step/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "instances",
	describe: "Workflow instance operations",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.command($list)
			.command($pause)
			.command($restart)
			.command($resume)
			.command($subscribe)
			.command($terminate)
			.command($batch)
			.command($events)
			.command($step)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
