export class User {
  public username: number;
  public lastname: string;

  constructor() {

  }

  public assignJsonToInstance(json) {
    Object.assign(this, json);
  }
}
