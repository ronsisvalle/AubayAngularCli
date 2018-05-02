import {Injectable} from '@angular/core';
import {User} from '../../model/user';

@Injectable()
export class AuthServiceService {
  private user: User;

  constructor() {
  }


  public setUser(paramUser: User) {
    if (paramUser) {
      this.user = new User();
      this.user.assignJsonToInstance(paramUser);
      localStorage.setItem('user', JSON.stringify(this.user));
    }
  }

  public getUser(): User {
    return this.user;
  }

  public isUserLogedin(): boolean {
    return !!this.user;
  }

  public clearUser() {
    if (this.user) {
      this.user = null;
      localStorage.removeItem('user');
    }
  }
}
