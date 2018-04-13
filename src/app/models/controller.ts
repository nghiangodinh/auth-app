export class Controller {
  static fromData(data: any) {
    const { id, name } = data;

    return new this(id, name);
  }

  constructor(public id: number, public name: string) {}
}
