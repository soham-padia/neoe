import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {SupabaseClient} from "@supabase/supabase-js";
import {Post, SupabasePostsService} from "../../services/supabase.posts.service";
import {Router} from "@angular/router";
import {nanoid} from "nanoid";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  subs:Subscription[]=[];
  loading:boolean=false;
  genres:string[]=['comedy','drama','thriller','family','animated','action']
  // @ts-ignore
  gen:string;


  ngOnDestroy(): void {
    this.subs.map(s=>s.unsubscribe())
  }

  constructor(private readonly supabase:SupabasePostsService,
              private router:Router) {

  }

  ngOnInit(): void {
  }

  onItemChange(e: any){
    this.gen=e.target.value;
  }

  async postData(
    postTitle:string,
    postSummary:string,
    postDescription:string,
    onHome=false,
    onDirector=false,
    onInvestor=false,
    estimatedTimeToClose:string,
    categories:string[]=[this.gen]
    ){
    const url = nanoid(20);
    console.log(this.gen);
    try {
      this.loading=true
      await this.supabase.createPost({onHome,onInvestor,onDirector,postTitle,postDescription,postSummary,estimatedTimeToClose,categories,url})
    }catch (error) {
      // @ts-ignore
      alert(error.message)
    }finally {
      this.loading = false
      this.router.navigateByUrl('/')
    }
  }

}
