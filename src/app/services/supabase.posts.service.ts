import { Injectable } from '@angular/core';
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

export interface Post{
  onHome:boolean,
  onInvestor:boolean,
  onDirector:boolean,
  postTitle:string,
  postDescription:string,
  postSummary:string,
  estimatedTimeToClose:string,
  categories:string[]
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

  get postsByTime(){
    // @ts-ignore
    return this.supabase.from('posts').select('postTitle,postDescription,postSummary,estimatedTimeToClose,onHome,onInvestor,categories').lte("created_at",[Date.now().toString()])
      .order('created_at',{ascending:false})
      .limit(10)
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
        }
      ])
  }
}
