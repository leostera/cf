/**
 * rum command
 * @generated from apis/overlays/rum.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $rules from "./rules/index.js";
import $siteinfo from "./site-info/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "rum",
	describe:
		"Real User Measurement (Web Analytics) — track page loads, Core Web Vitals, and visitor metrics",

	builder: (yargs) => {
		return yargs
			.command($rules)
			.command($siteinfo)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
