import Command from "../Command";
import CommandHelp from "../CommandHelp";
import { CommandIO } from "../CommandIO";

/** The `echo` command. */
export default class EchoCommand extends Command {
  /**
   * The help content.
   */
  static help: CommandHelp = {
    description: "Echos the input arguments.",
    usages: ["echo [args...]"],
    params: [{ name: "args", description: "The arguments." }],
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
    this.io.writeLine(args.slice(1).join(" "));
  }
}
