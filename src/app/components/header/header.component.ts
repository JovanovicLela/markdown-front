import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  // change it to false
  loggedIn = true;

  constructor(private authenticationService: AuthenticationService, private toastr: ToastrService, private router: Router) {
    this.authenticationService.currentUser$.subscribe(
      userModel => this.loggedIn = userModel != null
    );
  }

  ngOnInit() {
    this.toastr.info("Toast test");

  }

  logoutClick(event: any) {

    event.preventDefault();

    this.authenticationService.logout();
    this.toastr.show("You are logged out");
    this.router.navigate(['/home']);
  }
}
