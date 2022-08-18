/**
 * Sleeps for a specified time.
 * @param duration The duration in milliseconds.
 * @returns A sleeping {@link Promise} for awaiting.
 */
export function sleep(duration: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
