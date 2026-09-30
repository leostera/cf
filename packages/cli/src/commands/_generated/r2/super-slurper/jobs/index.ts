/**
 * jobs command group
 * @generated from apis/overlays/r2.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $abort from "./abort.js";
import $abortall from "./abort-all.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $pause from "./pause.js";
import $progress from "./progress.js";
import $resume from "./resume.js";
import $logs from "./logs/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "jobs",
	describe: "Operations for super-slurper.jobs",

	builder: (yargs) => {
		return yargs
			.command($abort)
			.command($abortall)
			.command($create)
			.command($delete)
			.command($get)
			.command($list)
			.command($pause)
			.command($progress)
			.command($resume)
			.command($logs)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
