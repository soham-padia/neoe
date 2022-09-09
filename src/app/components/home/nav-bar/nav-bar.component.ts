import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import firebase from "firebase/compat";
import User = firebase.User;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() user:User | undefined;


  constructor(private authService: AuthService) {
    console.log(this.user)
  }

  logout(){
    console.log("logging out")
    this.authService.Logout()
  }

  ngOnInit(): void {
  }

}
