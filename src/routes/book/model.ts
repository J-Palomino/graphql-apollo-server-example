import { Book } from "@gqlgen";
import { books } from "./data";
import { Viewer } from "@types";

export default class BookModel {
  viewer: Viewer;
  constructor(viewer: Viewer) {
    this.viewer = viewer;
  }
  async getBooks(): Promise<Book[]> {
    return books;
  }
}
