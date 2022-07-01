/**
 *
 */
export interface MoviePickRepo {
  getByFirstLetter: (firstLetter: string) => Promise<string | null>;
  getAll: () => Promise<string[]>;
  put: (title: string) => Promise<void>;
}