import {Component, Input, OnInit} from '@angular/core';
import {Post, SupabasePostsService} from "../../../../../services/supabase.posts.service";
import {Timestamp} from "rxjs";
import {Router} from "@angular/router";

export interface Postpp{
  id:number,
  created_at:string,
  user_id:string,
  onHome:boolean,
  onInvestor:boolean,
  onDirector:boolean,
  postTitle:string,
  postDescription:string,
  postSummary:string,
  estimatedTimeToClose:string,
  categories:string[],
  url:string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})



export class CardComponent implements OnInit {

  // @ts-ignore
  @Input() postId: bigint;
  // @ts-ignore
  post:Postpp[];
  card:any[]=[{}]



  constructor(private readonly supabasePosts:SupabasePostsService,
              public router:Router) {
  }

  ngOnInit(): void {
    this.getPostsById()
    console.log(this.card)
  }

  async getPostsById(){
    try {
      let id=this.postId
      let {data:post,error,status}=await this.supabasePosts.postsById(Number(id));
      // console.log(post)
      post?.map((value, index) => {
        this.card[index]=value
      })
    }catch (error){
      // @ts-ignore
      alert(error.message)
    }finally {

    }
  }

}
