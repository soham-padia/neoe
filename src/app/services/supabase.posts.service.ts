import { Injectable } from '@angular/core';
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

/*import {toISOString} from "@segment/to-iso-string"*/

export interface Post{
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

@Injectable({
  providedIn: 'root'
})

export class SupabasePostsService {

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

  get postsIdByTime(){
    const date=new Date()
    const nowUtc=Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
      date.getUTCDate(), date.getUTCHours(),
      date.getUTCMinutes(), date.getUTCSeconds())
    const dt=Date.now()
    // @ts-ignore
    return this.supabase.from('posts').select('id').lte("created_at",[date.toUTCString()])
      .order('created_at',{ascending:false})
      .limit(10)
  }

  postsById(id:number){
    return this.supabase.from('posts').select().eq('id',id)
  }

  postsByUrl(url:string){
    return this.supabase.from('posts').select().eq('url',url);
  }

  createPost(post:Post){
    return this.supabase.from('posts')
      .insert([
        {
          user_id:this.supabase.auth.user()?.id,
          onHome: post.onHome,
          onInvestor: post.onInvestor,
          onDirector:post.onDirector,
          postTitle:post.postTitle,
          postDescription:post.postDescription,
          postSummary:post.postSummary,
          estimatedTimeToClose:post.estimatedTimeToClose,
          categories:post.categories,
          url:post.url
        }
      ])
  }
}
