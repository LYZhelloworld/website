/**
 * The help of a command.
 */
export default interface CommandHelp {
  /**
   * The description of the command.
   */
  description: string;

  /**
   * The usages of the command. One line is an item.
   */
  usages: string[];

  /**
   * The usages of parameters.
   * For each item, the key is the parameter, and the value is the description.
   */
  params: ParameterHelp[];
}

/**
 * The help of a parameter.
 */
interface ParameterHelp {
  /**
   * The name of the parameter.
   */
  name: string;

  /**
   * The desription of the parameter.
   */
  description: string;
}
