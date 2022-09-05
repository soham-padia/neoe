import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card_header: string | undefined;
  @Input() card_title: string | undefined;


  constructor() {
  }

  ngOnInit(): void {
  }

}
