import Command from "../Command";
import CommandHelp from "../CommandHelp";
import { CommandIO } from "../CommandIO";

/**
 * The `github` command.
 */
export default class GitHubCommand extends Command {
  /**
   * The help content.
   */
  static help: CommandHelp = {
    description:
      "Navigates to the GitHub homepage of the author of this website.",
    usages: ["github"],
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
    window.open("https://github.com/LYZhelloworld", "_blank");
  }
}
