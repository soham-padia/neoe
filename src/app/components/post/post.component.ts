import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SupabasePostsService} from "../../services/supabase.posts.service";
import {PostgrestError} from "@supabase/supabase-js";
import {Postpp} from "../home/main-body-component/section-card/card/card.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  // @ts-ignore
  postId:String;
  // @ts-ignore
  post:Postpp;
  card:any[]=[{}]

  constructor(private route:ActivatedRoute,
              private supabasePosts:SupabasePostsService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.postId=this.route.snapshot.paramMap.get('id')
    this.getPostsByUrl()
    console.log(this.card)
  }

  async getPostsByUrl(){
    try {
      let {data: post, error, status} = await this.supabasePosts.postsByUrl(this.postId.toString());
      post?.map((value, index) => {
        this.card[index]=value
      })
    }catch (error) {
      // @ts-ignore
      alert(error.message)
    }
  }

}
