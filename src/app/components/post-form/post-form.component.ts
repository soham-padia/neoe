import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {AuthService, UserData} from "../../services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

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
      this.authService.CurrentUser().subscribe(user=>{
        this.user=user;
      })
    )
  }

  postData(form:NgForm):void {
    const {data}=form.value;

    // @ts-ignore
    this.postService.postData(data,
      `${this.user?.firstName} ${this.user?.lastName}`,
      {
        firstName:this.user?.firstName,
        lastName:this.user?.lastName,

      });
    form.resetForm()
  }

}
