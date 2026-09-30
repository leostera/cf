/**
 * rules command group
 * @generated from apis/overlays/cloudforce-one.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $deleteAll from "./deleteAll.js";
import $get from "./get.js";
import $list from "./list.js";
import $search from "./search.js";
import $update from "./update.js";
import $validate from "./validate.js";
import $approvals from "./approvals/index.js";
import $email from "./email/index.js";
import $exemptions from "./exemptions/index.js";
import $managed from "./managed/index.js";
import $stats from "./stats/index.js";
import $tree from "./tree/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "rules",
	describe: "Rule management operations",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($deleteAll)
			.command($get)
			.command($list)
			.command($search)
			.command($update)
			.command($validate)
			.command($approvals)
			.command($email)
			.command($exemptions)
			.command($managed)
			.command($stats)
			.command($tree)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
