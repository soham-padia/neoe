import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Subscription} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {RegisterComponent} from "../register/register.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  subs:Subscription[]=[];
  constructor(private authService:AuthService,
              private afAuth:AngularFireAuth,
              private router:Router,
              private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.subs.push(
      this.authService.UserData.subscribe(user=>{
        if (user!==undefined||user!==null){
          this.router.navigateByUrl('/').then();
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subs.map(s=>s.unsubscribe());
  }

  login(form: NgForm): void  {
    const {email,password}=form.value;

    if (!form.valid){
      return;
    }

    this.authService.SignIn(email,password);
    form.resetForm()
  }

  openRegister(): void  {
    const dialogRef=this.matDialog.open(RegisterComponent,{
      role:'dialog',
      height:'480px',
      width:'480px'
    });

    dialogRef.afterClosed().subscribe(result=>{
      const {full_name,dob,email,password,password_check}=result;
      if (result!==undefined){
        if (password==password_check){
          this.authService.SignUp(email,password,full_name,dob);
        }else return
      }else return;
      console.log(result)
    });
    return;
  }
}
