import { CommandConstructor } from "./Command";
import EchoCommand from "./commands/echo";
import HelpCommand from "./commands/help";

/**
 * The commands used in this application.
 *
 * - **Key**: the name of the command, which should be the same as the 0th argument.
 * - **Value**: the class of the command.
 */
export const registeredCommands: { [key: string]: CommandConstructor } = {
  echo: EchoCommand,
  help: HelpCommand,
};
