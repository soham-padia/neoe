import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  // @ts-ignore
  postId:String;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    this.postId=this.route.snapshot.paramMap.get('id')
  }

}
