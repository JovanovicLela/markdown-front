import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  // change it to false
  loggedIn = true;

  constructor(private authenticationService: AuthenticationService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.toastr.show("Toast test");

  }

  logoutClick(event: any) {

    event.preventDefault();

    this.authenticationService.logout();
  }
}
