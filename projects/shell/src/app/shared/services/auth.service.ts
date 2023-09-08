import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly isLoggedIn$ = new BehaviorSubject<boolean>(true);

  public isAuthenticated$ = (): Observable<boolean> => {
    return this.isLoggedIn$.asObservable();
  };
}
