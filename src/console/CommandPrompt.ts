import { parseArguments } from "@/utils/argument";
import { sleep } from "@/utils/sleep";
import { CommandIO } from "./CommandIO";
import { registeredCommands } from "./RegisteredCommands";

/**
 * The duration between displaying characters in milliseconds.
 */
const OUTPUT_INTERVAL = 10;

/**
 * The command prompt.
 */
export default class CommandPrompt extends CommandIO {
  /**
   * The function to output data.
   */
  private outputFunc: (data: string) => void;

  /**
   * The input buffer.
   * One element is a line of input, excluding the trailing newline.
   */
  private inputBuffer: string[] = [];

  /**
   * The output buffer.
   */
  private outputBuffer = "";

  /**
   * The constructor.
   * @param {OutputAsyncFunc} outputFunc The function to output data.
   * @constructor
   */
  constructor(outputFunc: (data: string) => void) {
    super();
    this.outputFunc = outputFunc;
  }

  /**
   * Starts to process user inputs.
   */
  async startAsync(): Promise<never> {
    this.outputProc();

    // Welcome message.
    this.write(this.welcome());

    for (;;) {
      const command = await this.readLineAsync();

      // Echo.
      this.writeLine(`> ${command}`);

      try {
        const args = parseArguments(command);
        if (args.length > 0) {
          this.call(args, command);
        }
      } catch (e) {
        if (e instanceof Error) {
          this.writeLine(`Error: ${e.message}`);
        }
      }
    }
  }

  /**
   * Appends a new line of input to the input buffer.
   * @param data The new input.
   */
  input(data: string) {
    this.inputBuffer.push(data);
  }

  /** @inheritdoc */
  async readLineAsync(): Promise<string> {
    for (;;) {
      const input = this.inputBuffer.shift();
      if (input === undefined) {
        // Wait until it changes.
        await sleep(1);
      } else {
        return input;
      }
    }
  }

  /** @inheritdoc */
  write(data: string): void {
    this.outputBuffer += data;
  }

  /**
   * The welcome message.
   * @returns The welcome message.
   */
  private welcome(): string {
    return (
      "Helloworld (c) Command Prompt\n" +
      `Current time: ${new Date().toLocaleString()}\n` +
      "\n" +
      'Type "help" to get help.\n'
    );
  }

  /**
   * Calls commands.
   * @param {string[]} args The arguments. The first argument `arg[0]` will be the name of the command.
   * @param {string} rawCommand The unparsed raw command line.
   */
  private call(args: string[], rawCommand: string): void {
    const cmd = args[0];

    if (cmd in registeredCommands) {
      new registeredCommands[cmd](this).call(args, {
        rawCommand,
      });
    } else {
      this.writeLine(`The command "${cmd}" is not found.`);
    }
  }

  /**
   * An endless loop procedure to write output
   * with an interval between characters.
   */
  private async outputProc(): Promise<never> {
    for (;;) {
      if (this.outputBuffer) {
        const c = this.outputBuffer.charAt(0);
        this.outputBuffer = this.outputBuffer.substring(1);
        this.outputFunc(c);
      }

      // Sleep between character outputs.
      await sleep(OUTPUT_INTERVAL);
    }
  }
}
