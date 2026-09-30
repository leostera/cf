/**
 * network-interconnects command
 * @generated from apis/overlays/network-interconnects.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $cnis from "./cnis/index.js";
import $interconnects from "./interconnects/index.js";
import $settings from "./settings/index.js";
import $slots from "./slots/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "network-interconnects",
	describe:
		"Physical and virtual private interconnects between your infrastructure and Cloudflare's network",

	builder: (yargs) => {
		return yargs
			.command($cnis)
			.command($interconnects)
			.command($settings)
			.command($slots)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
