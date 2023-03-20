import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  // change it to false
  loggedIn = true;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  logoutClick(event: any) {
    event.preventDefault();

    this.authenticationService.logout();
  }
}
