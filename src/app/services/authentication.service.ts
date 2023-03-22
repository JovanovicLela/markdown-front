import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { UserModel } from "../models/user-model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }


  login(username: string, password: string): Observable<UserModel> {
    return null;
  }

  logout() {
    // TODO: log out logic
  }
}
