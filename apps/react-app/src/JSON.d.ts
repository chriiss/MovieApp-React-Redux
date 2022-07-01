/**
 * Tweak JSON.parse definition to force checking return type.
 */
interface JSON {
  /**
   * Converts a JavaScript Object Notation (JSON) string into an object.
   * @param text A valid JSON string.
   * @param reviver A function that transforms the results. This function is called for each member of the object.
   * If a member contains nested objects, the nested objects are transformed before the parent object is.
   */
  // eslint-disable-next-line  @typescript-eslint/method-signature-style, @typescript-eslint/no-explicit-any
  parse(text: string, reviver?: (this: any, key: string, value: any) => any): unknown;
  /**
   * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
   * @param value A JavaScript value, usually an object or array, to be converted.
   * @param replacer A function that transforms the results.
   * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   */
  // eslint-disable-next-line  @typescript-eslint/method-signature-style, @typescript-eslint/no-explicit-any
  stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
  /**
   * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
   * @param value A JavaScript value, usually an object or array, to be converted.
   * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
   * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   */
  // eslint-disable-next-line  @typescript-eslint/method-signature-style, @typescript-eslint/no-explicit-any
  stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
}

interface Body {
    readonly body: ReadableStream<Uint8Array> | null;
    readonly bodyUsed: boolean;
    // eslint-disable-next-line  @typescript-eslint/method-signature-style
    arrayBuffer(): Promise<ArrayBuffer>;
    // eslint-disable-next-line  @typescript-eslint/method-signature-style
    blob(): Promise<Blob>;
    // eslint-disable-next-line  @typescript-eslint/method-signature-style
    formData(): Promise<FormData>;
    // eslint-disable-next-line  @typescript-eslint/method-signature-style
    json(): Promise<unknown>;
    // eslint-disable-next-line  @typescript-eslint/method-signature-style
    text(): Promise<string>;
}
