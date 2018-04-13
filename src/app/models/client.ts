export class Client {
  static fromData(data: any) {
    const {
      id,
      name,
      secret,
      applicationType,
      active,
      accessTokenLifeTime,
      refreshTokenLifeTime,
      allowedOrigin
    } = data;

    return new this(
      id,
      name,
      secret,
      applicationType,
      active,
      accessTokenLifeTime,
      refreshTokenLifeTime,
      allowedOrigin
    );
  }

  constructor(
    public id: number,
    public name: string,
    public secret: string,
    public applicationType: number,
    public active: boolean,
    public accessTokenLifeTime: string,
    public refreshTokenLifeTime: string,
    public allowedOrigin: string
  ) {}
}
