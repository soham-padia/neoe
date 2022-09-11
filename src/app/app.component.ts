import {Component, OnInit} from '@angular/core';
import {SupabaseService} from "./supabase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  session = this.supabase.session
  title = 'neoe';
  constructor(private readonly supabase:SupabaseService) {
  }

  ngOnInit() {
    this.supabase.authChanges((_, session) => (this.session = session))
  }
}
