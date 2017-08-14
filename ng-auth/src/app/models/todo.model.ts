export class Todo {
  id: string;
  title: string;
  text: string;

  constructor(id: string, title: string, text: string) {
    this.id = id;
    this.text = text;
    this.title = title;
  }
}