import {Component, Input, OnInit} from '@angular/core';
import {SupabaseService} from "../../../supabase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  session=this.supabase.session


  constructor(private readonly supabase:SupabaseService,
              public router:Router) {
  }

  async logout() {
    await this.supabase.signOut()
  }

  ngOnInit() {
    this.supabase.authChanges((_, session) => (this.session = session))
  }

}
