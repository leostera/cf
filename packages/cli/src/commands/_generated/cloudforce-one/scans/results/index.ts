/**
 * results command group
 * @generated from apis/overlays/cloudforce-one.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $getBanners from "./getBanners.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "results",
	describe: "Operations for scans.results",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($getBanners)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
