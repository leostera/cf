/**
 * livestreams command group
 * @generated from apis/overlays/realtime.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $list from "./list.js";
import $start from "./start.js";
import $stop from "./stop.js";
import $sessions from "./sessions/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "livestreams",
	describe: "Independent and meeting-based livestreams and their sessions",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($list)
			.command($start)
			.command($stop)
			.command($sessions)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
