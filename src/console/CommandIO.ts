/**
 * The interface that provides reading and writing methods.
 */
export abstract class CommandIO {
  /**
   * Reads a line from the input buffer asynchronously.
   * Waits for the input when the buffer is empty.
   */
  abstract readLineAsync(): Promise<string>;

  /**
   * Writes data to the output buffer.
   * @param data The data to write.
   */
  abstract write(data: string): void;

  /**
   * Writes data to the output buffer, with a newline.
   * @param data The data to write.
   */
  writeLine(data: string): void {
    this.write(data + "\n");
  }
}
