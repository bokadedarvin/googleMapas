import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
// import { CookieServiceService } from '../../services/general/cookieService/cookie-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  userData: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // private cookieService: CookieServiceService
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (localStorage.getItem('userData')) {
        return true;
      } else {
        this.router.navigate(['/register']);
      return true;
      }
  }
}
