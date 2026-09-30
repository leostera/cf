/**
 * email command group
 * @generated from apis/overlays/cloudforce-one.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $test from "./test.js";
import $update from "./update.js";
import $updatePendingApproval from "./updatePendingApproval.js";
import $validate from "./validate.js";
import $approvals from "./approvals/index.js";
import $schema from "./schema/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "email",
	describe: "Email rule operations",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.command($list)
			.command($test)
			.command($update)
			.command($updatePendingApproval)
			.command($validate)
			.command($approvals)
			.command($schema)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
