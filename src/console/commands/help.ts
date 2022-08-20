import Command from "../Command";
import CommandHelp from "../CommandHelp";
import { CommandIO } from "../CommandIO";
import { registeredCommands } from "../RegisteredCommands";

/**
 * The `help` command.
 */
export default class HelpCommand extends Command {
  /**
   * The help content.
   */
  static help: CommandHelp = {
    description: "Shows the list of all commands, or gets the usage.",
    usages: ["help [command]"],
    params: [
      {
        name: "command",
        description:
          "The command to get help. If not given, gets a list of all commands available.",
      },
    ],
  };

  /**
   * The constructor.
   * @param {CommandIO} io The IO interface.
   * @constructor
   */
  constructor(io: CommandIO) {
    super(io);
  }

  /** @inheritdoc */
  call(args: string[]): void {
    if (args.length > 1) {
      const helpCommand = args[1];
      if (helpCommand in registeredCommands) {
        this.showHelp(registeredCommands[helpCommand].help);
      } else {
        this.io.writeLine(`The command "${helpCommand}" is not found.`);
        this.showHelpOfAllCommands();
      }
    } else {
      this.showHelpOfAllCommands();
    }
  }

  /**
   * Shows help of a command.
   * @param {CommandHelp} help: the help content of the command.
   */
  private showHelp(help: CommandHelp): void {
    this.io.writeLine(`Description\n  ${help.description}`);

    if (help.usages.length > 0) {
      this.io.writeLine(`\nUsages`);
      help.usages.forEach((usage) => this.io.writeLine(`  ${usage}`));
    }

    if (help.params.length > 0) {
      this.io.writeLine(`\nParameters`);
      help.params.forEach((param) =>
        this.io.writeLine(`  ${param.name}\t${param.description}`)
      );
    }
  }

  /**
   * Shows help of all commands.
   */
  private showHelpOfAllCommands() {
    this.io.writeLine("Available commands:");

    const commands = Object.keys(registeredCommands);
    commands.sort();

    commands.forEach((command) => {
      const commandClass = registeredCommands[command];
      this.io.writeLine(`  ${command}: ${commandClass.help.description}`);
    });
  }
}
