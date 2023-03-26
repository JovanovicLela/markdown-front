import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, of} from "rxjs";
import { UserModel } from "../models/user-model";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {marked} from "marked";
import use = marked.use;
import {environment} from "../../environments/environment";

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

    const url = `${environment.ENDPOINTS.USER_LOGIN}`;

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

  registerUser(
    username: string, displayName: string, email: string, password: string
  ): Observable<UserModel> {

    //const url = "http://demo9232187.mockable.io/register";
    const url = `${environment.ENDPOINTS.USER_CREATION}`;

    return this.httpClient.post<UserModel>(url, {username, displayName, email ,password}).pipe(
      map(userModel => {

        this.cookieService.set(AuthenticationService.USER_INFO, JSON.stringify(userModel));

        this.userInfoSubject.next(userModel);

        return userModel;
        })
    );
  }

  public get currentUserValue() {
    return this.userInfoSubject.value;
  }

  logout() {
    this.cookieService.delete(AuthenticationService.USER_INFO);

    this.userInfoSubject.next(null);
  }
}
