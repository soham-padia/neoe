import {Component, Input, OnInit} from '@angular/core';
import {Post, SupabasePostsService} from "../../../../services/supabase.posts.service";
import {SupabaseProfilesService} from "../../../../services/supabase.profiles.service";
import {data} from "autoprefixer";

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.scss']
})
export class SectionCardComponent implements OnInit {

  @Input()
  title: string | undefined;
  cards: any |undefined;

  post: Post | undefined

  constructor(private readonly supabasePost:SupabasePostsService,
              private readonly supabaseProfiles:SupabaseProfilesService) {
  }

  ngOnInit(): void {
    this.cards= [
      {
        "card_header":"Shib1",
        "card_title":"Shiba Inu1"
      },
      {
        "card_header":"Shib2",
        "card_title":"Shiba Inu2"
      },
      {
        "card_header":"Shib3",
        "card_title":"Shiba Inu3"
      },
      {
        "card_header":"Shib4",
        "card_title":"Shiba Inu4"
      },
      {
        "card_header":"Shib5",
        "card_title":"Shiba Inu5"
      },
      {
        "card_header":"Shib6",
        "card_title":"Shiba Inu6"
      },
      {
        "card_header":"Shib7",
        "card_title":"Shiba Inu7"
      },
    ]
    this.getPostsbyTime()
    console.log(this.post)
  }

  async getPostsbyTime(){
    try {
      let {data: post,error,status}=await this.supabasePost.postsByTime
      console.log(post)
    }catch (error){
      // @ts-ignore
      alert(error.message)
    }finally {

    }
  }

}
