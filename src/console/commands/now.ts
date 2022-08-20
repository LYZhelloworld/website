import Command from "../Command";
import CommandHelp from "../CommandHelp";
import { CommandIO } from "../CommandIO";

/**
 * The `now` command.
 */
export default class NowCommand extends Command {
  /**
   * The help content.
   */
  static help: CommandHelp = {
    description: "Gets the current date and time.",
    usages: ["now"],
    params: [],
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
  call(): void {
    const now = new Date();
    this.io.writeLine(`Current time: ${now.toLocaleString()}`);
    this.io.writeLine(`UTC time: ${now.toISOString()}`);
    this.io.writeLine(`Unix timestamp: ${Math.floor(now.getTime() / 1000)}`);
    this.io.writeLine(`Unix timestamp (ms): ${now.getTime()}`);
  }
}
