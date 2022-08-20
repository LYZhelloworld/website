import { CommandConstructor } from "./Command";
import HelpCommand from "./commands/help";

/**
 * The commands used in this application.
 *
 * - The key is the name of the command, which should be the same as the 0th argument.
 * - The value is the class of the command.
 */
export const registeredCommands: { [key: string]: CommandConstructor } = {
  help: HelpCommand,
};
