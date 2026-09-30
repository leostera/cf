/**
 * schemas command group
 * @generated from apis/overlays/api-security.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $setvalidation from "./set-validation.js";
import $hosts from "./hosts/index.js";
import $operations from "./operations/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "schemas",
	describe: "Operations for schema-validation.schemas",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.command($list)
			.command($setvalidation)
			.command($hosts)
			.command($operations)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
