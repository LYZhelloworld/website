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

    for (;;) {
      const command = await this.getInput();
      this.writeOutput(command + "\n");
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
   * Writes output to the output buffer.
   * @param data The output data.
   */
  private writeOutput(data: string): void {
    this.outputBuffer += data;
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
