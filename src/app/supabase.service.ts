import { Injectable } from '@angular/core';
import {AuthChangeEvent, createClient, Session, SupabaseClient} from "@supabase/supabase-js";
import {environment} from "../environments/environment";
import {Router} from "@angular/router";

export interface Profile{
  fName:string,
  lName:string,
  isVerified:boolean,
  canPostHome:boolean,
  canPostDirector:boolean,
  canPostInvestor:boolean,
  isAdmin:boolean
}

@Injectable({
  providedIn: 'root'
})



export class SupabaseService {

  private supabase:SupabaseClient;

  constructor(private router:Router) {
    this.supabase=createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    )
  }

  get user(){
    return this.supabase.auth.user()
  }

  get session(){
    return this.supabase.auth.session()
  }

  get profile(){
    return this.supabase
      .from('profiles')
      .select('fName,lName,isVerified,canPostHome,canPostDirector,canPostInvestor,isAdmin')
      .eq('id',this.user?.id)
      .single()
  }

  authChanges(callback:(event:AuthChangeEvent,session:Session|null)=>void){
    return this.supabase.auth.onAuthStateChange(callback)
  }

  signIn(email:string){
    return this.supabase.auth.signIn({email})
  }

  signOut(){
    this.router.navigateByUrl('/login')
    return this.supabase.auth.signOut()
  }

  updateProfile(profile:Profile){
    const update={
      id:this.user?.id,
      updated_at:new Date(),
      ...profile,
    }
    return this.supabase.from('profiles').upsert(update,{
      returning: "minimal",
    })
  }


}
