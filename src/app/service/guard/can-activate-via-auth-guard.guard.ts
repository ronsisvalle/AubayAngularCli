import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthServiceService} from '../commons/auth-service.service';

@Injectable()
export class CanActivateViaAuthGuardGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isUserLogedin()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
