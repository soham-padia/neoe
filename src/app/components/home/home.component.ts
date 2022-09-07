import { Component, OnInit } from '@angular/core';
import {AuthService, UserData} from "../../services/auth.service";
import {Subscription} from "rxjs";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts:any[]=[];
  user: UserData | undefined;
  subs:Subscription[]=[];

  ngOnDestroy(): void {
    this.subs.map(s=>s.unsubscribe())
  }

  constructor(private postService:PostService,
              private authService:AuthService) {

  }

  ngOnInit(): void {
    this.subs.push(
      this.postService.getAllPosts().subscribe(posts =>{
        this.posts=posts
      })
    )

    this.subs.push(

    )
  }

}
