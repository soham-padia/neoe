import {Component, Input, OnInit} from '@angular/core';
import {SupabaseProfilesService} from "../../../services/supabase.profiles.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {RegisterComponent} from "../../register/register.component";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  session=this.supabase.session


  constructor(private readonly supabase:SupabaseProfilesService,
              public router:Router,
              public dialog:MatDialog) {
  }

  async logout() {
    await this.supabase.signOut()
  }

  openProfile(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.supabase.authChanges((_, session) => (this.session = session))
  }

}
