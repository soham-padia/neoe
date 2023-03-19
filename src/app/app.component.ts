import {Component, OnInit} from '@angular/core';
import {SupabaseProfilesService} from "./services/supabase.profiles.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  session = this.supabase.session
  title = 'neoe';
  constructor(private readonly supabase:SupabaseProfilesService) {
  }

  ngOnInit() {
    this.supabase.authChanges((_, session) => (this.session = session))
  }
}
