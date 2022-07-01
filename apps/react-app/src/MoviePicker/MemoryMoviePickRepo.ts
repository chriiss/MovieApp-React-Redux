import { MoviePickRepo } from "./MoviePickRepo";

/**
 *
 */
export class MemoryMoviePickRepo implements MoviePickRepo {
  /**
   *
   */
  private readonly byFirstLetter = new Map<string, string>();

  /**
   *
   */
  constructor() {
    this.put = this.put.bind(this);
  }

  /**
   *
   */
  async getByFirstLetter(firstLetter: string) {
    return this.byFirstLetter.get(firstLetter.toUpperCase()) ?? null;
  }

  /**
   *
   */
  async getAll() {
    return [...this.byFirstLetter.values()];
  }

  /**
   *
   */
  async put(title: string) {
      if(title.length) {
          this.byFirstLetter.set([...title][0].toUpperCase(), title);
      }
  }
}
