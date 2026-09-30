/**
 * records command group
 * @generated from apis/overlays/dns.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $batch from "./batch.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $edit from "./edit.js";
import $export from "./export.js";
import $get from "./get.js";
import $import from "./import.js";
import $list from "./list.js";
import $scan from "./scan.js";
import $scanlist from "./scan-list.js";
import $scanreview from "./scan-review.js";
import $scantrigger from "./scan-trigger.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "records",
	describe: "Operations for records",

	builder: (yargs) => {
		return yargs
			.command($batch)
			.command($create)
			.command($delete)
			.command($edit)
			.command($export)
			.command($get)
			.command($import)
			.command($list)
			.command($scan)
			.command($scanlist)
			.command($scanreview)
			.command($scantrigger)
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
