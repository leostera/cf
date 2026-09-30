/**
 * top command group
 * @generated from apis/overlays/radar.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $dnssec from "./dnssec.js";
import $edns from "./edns.js";
import $ipversion from "./ip-version.js";
import $locations from "./locations.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "top",
	describe: "Operations for as112.top",

	builder: (yargs) => {
		return yargs
			.command($dnssec)
			.command($edns)
			.command($ipversion)
			.command($locations)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
