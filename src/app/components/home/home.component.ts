import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Subscription} from "rxjs";
import {PostService} from "../../services/post.service";
import {user} from "@angular/fire/auth";
import {Router} from "@angular/router";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat";
import User = firebase.User;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts:any[]=[];
  user: User | undefined;
  subs:Subscription[]=[];


  getauth=getAuth();




  ngOnDestroy(): void {
    this.subs.map(s=>s.unsubscribe())
  }

  constructor(private postService:PostService,
              private authService:AuthService,
              private router:Router) {

    console.log(this.user)
    console.log(this.user?.emailVerified)


  }

  ngOnInit(): void {
    this.subs.push(
      this.postService.getAllPosts().subscribe(posts =>{
        this.posts=posts
      })
    )

    this.subs.push(
      this.authService.CurrentUser().subscribe(user=>{
        this.user=user;
        console.log(user);
      })
    )
  }

}
