import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Profile, SupabaseProfilesService} from "../../services/supabase.profiles.service";
import {Session} from "@supabase/supabase-js";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  fName: string | undefined;
  lName: string | undefined;
  dob: any;
  email: any;
  pass1: any;
  pass2: any;
  loading = false
  profile: Profile | undefined

  session:Session | null=this.supabase.session


  constructor(public dialogRef:MatDialogRef<RegisterComponent>, private readonly supabase:SupabaseProfilesService) {

  }

  ngOnInit() {
    this.getProfile()
  }

  async getProfile() {
    try {
      this.loading = true
      let { data: profile, error, status } = await this.supabase.profile

      if (error && status !== 406) {
        throw error
      }

      if (profile) {
        this.profile = profile
      }
    } catch (error) {
      // @ts-ignore
      alert(error.message)
    } finally {
      this.loading = false
    }
  }

  async updateProfile(
    fName: string,
    lName: string,
    isVerified=false,
    canPostHome=false,
    canPostDirector=false,
    canPostInvestor=false,
    isAdmin=false

  ) {
    try {
      this.loading = true
      await this.supabase.updateProfile({ fName,lName,isVerified,isAdmin,canPostHome,canPostDirector,canPostInvestor})

    } catch (error) {
      // @ts-ignore
      alert(error.message)
    } finally {
      this.loading = false
    }
  }

}
