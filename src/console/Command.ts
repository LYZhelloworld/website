import CommandHelp from "./CommandHelp";
import { CommandIO } from "./CommandIO";
import { CommandLineOptions } from "./CommandLineOptions";

/**
 * The interface of a constructor of a {@link Command}.
 */
export interface CommandConstructor {
  /**
   * The constructor.
   * @param {CommandIO} io The input/output interface.
   * @constructor
   */
  new (io: CommandIO): Command;

  /**
   * The help content.
   */
  help: CommandHelp;
}

/**
 * The interface of a command.
 */
export interface Command {
  /**
   * Calls the command with arguments.
   * @param {string[]} args The arguments, separated with spaces.
   * @param {CommandLineOptions} options The command line options.
   */
  call(args: string[], options: CommandLineOptions): void;
}
