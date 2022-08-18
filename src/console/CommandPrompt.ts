import { parseArguments } from "@/utils/argument";
import { sleep } from "@/utils/sleep";

/**
 * The duration between displaying characters in milliseconds.
 */
const OUTPUT_INTERVAL = 10;

/**
 * The command prompt.
 */
export default class CommandPrompt {
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
      const command = await this.getInput();

      // Echo.
      this.writeLine(`> ${command}`);

      try {
        const args = parseArguments(command);
        this.call(args);
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

  /**
   * Writes output to the output buffer.
   * @param data The output data.
   */
  write(data: string): void {
    this.outputBuffer += data;
  }

  /**
   * Writes output and a newline.
   * @param data The output data.
   */
  writeLine(data: string): void {
    this.write(data);
    this.write("\n");
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
   * @param args The arguments. The first argument `arg[0]` will be the name of the command.
   */
  private call(args: string[]): void {
    // TODO
    this.writeLine(args.join(" "));
  }

  /**
   * Gets a line of input from the input buffer.
   * Waits for the input when the buffer is empty.
   */
  private async getInput(): Promise<string> {
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
