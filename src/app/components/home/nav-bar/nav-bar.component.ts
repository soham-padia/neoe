import {Component, Input, OnInit} from '@angular/core';
import {UserData} from "../../../services/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() user:UserData | undefined;


  constructor() {
    console.log(this.user)
  }

  ngOnInit(): void {
  }

}
