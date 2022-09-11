import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {RegisterComponent} from "../register/register.component";
import {Profile, SupabaseService} from "../../supabase.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  profile:Profile|undefined;
  loading=false;
  subs:Subscription[]=[];
  constructor(private router:Router,
              private matDialog:MatDialog,
              private readonly supabase:SupabaseService) { }

  ngOnInit(): void {
    this.getProfile
  }

  async getProfile(){
    try {
      this.loading = true
      let { data: profile, error, status } = await this.supabase.profile

      if (error && status !== 406) {
        throw error
      }

      if (profile) {
        this.profile = profile
        await this.router.navigateByUrl('/')
      }
    } catch (error) {
      // @ts-ignore
      alert(error.message)
    } finally {
      this.loading = false
    }
  }

  ngOnDestroy(): void {
  }

  async login(email:string) {

    try {
      this.loading=true
      await this.supabase.signIn(email)
      alert('Check your email for the login link!')
    }catch (error){
      // @ts-ignore
      alert(error.error_description||error.message)
    }finally {
      this.loading=false
      this.router.navigateByUrl('/register')
    }

  }

  openRegister(): void  {
    const dialogRef=this.matDialog.open(RegisterComponent,{
      role:'dialog',
      height:'480px',
      width:'480px'
    });

    dialogRef.afterClosed().subscribe(result=>{/*
      const {full_name,dob,email,password,password_check}=result;
      if (result!==undefined){
        if (password==password_check){
        }else return
      }else return;
      console.log(result)*/
    });
    return;
  }
}
