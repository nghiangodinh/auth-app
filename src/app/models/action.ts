export class Action {
  static fromData(data: any) {
    const {
      id,
      controllerId,
      actionName,
      actionDisplayName,
      showAsMenu
    } = data;

    return new this(
      id,
      controllerId,
      actionName,
      actionDisplayName,
      showAsMenu
    );
  }

  constructor(
    public id: number,
    public controllerId: number,
    public actionName: string,
    public actionDisplayName: string,
    public showAsMenu: boolean
  ) {}
}
