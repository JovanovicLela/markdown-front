import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, of} from "rxjs";
import { UserModel } from "../models/user-model";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  static USER_INFO = 'USER_INFO';
  private userInfoSubject: BehaviorSubject<UserModel>;
  public currentUser$: Observable<UserModel>;

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {

    const jsonString = this.cookieService.get(AuthenticationService.USER_INFO);
    if (jsonString === '') {
      this.userInfoSubject = new BehaviorSubject<UserModel>(null);
    } else {
      this.userInfoSubject = new BehaviorSubject<UserModel>(JSON.parse(this.cookieService.get(AuthenticationService.USER_INFO)));
    }

    this.currentUser$ = this.userInfoSubject.asObservable();
  }


  login(username: string, password: string): Observable<UserModel> {

    const url = "http://demo9232187.mockable.io/login";

     return this.httpClient.post<UserModel>(url, {username, password}).pipe(
      map(userModel => {

        // create cookie with jwt
        this.cookieService.set(AuthenticationService.USER_INFO, JSON.stringify(userModel));

        //notify
        this.userInfoSubject.next(userModel);

        return userModel;
      })
    );
  }

  logout() {
    // TODO: log out logic
  }
}
