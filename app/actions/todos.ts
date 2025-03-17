/**
 * Asynchronously processes a todo item by prefixing it with "Re:" and returns the modified string.
 *
 * @param todo - The original todo string to be processed.
 * @returns A new string with "Re:" added at the beginning of the input todo.
 */
export const addTodo = async (todo: string) => {
    const ret = "Re:" + todo;
    console.log(ret);
    return ret;
}
