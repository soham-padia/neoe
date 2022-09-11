import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  subs:Subscription[]=[];

  ngOnDestroy(): void {
    this.subs.map(s=>s.unsubscribe())
  }

  constructor() {

  }

  ngOnInit(): void {
  }

  postData(form:NgForm):void {
  }

}
