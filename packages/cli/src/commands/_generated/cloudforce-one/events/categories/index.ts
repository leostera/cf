/**
 * categories command group
 * @generated from apis/overlays/cloudforce-one.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $catalog from "./catalog/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "categories",
	describe: "Operations for events.categories",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($catalog)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
