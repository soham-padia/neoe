import {Component, Input, OnInit} from '@angular/core';
import {AuthService, UserData} from "../../../services/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() user:UserData | undefined;


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
