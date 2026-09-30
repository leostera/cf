/**
 * moq command group
 * @generated from apis/overlays/realtime.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $relays from "./relays/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "moq",
	describe: "MoQ relays for publishing and subscribing to media streams",

	builder: (yargs) => {
		return yargs
			.command($relays)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
