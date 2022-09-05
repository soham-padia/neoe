import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-body-component',
  templateUrl: './main-body-component.component.html',
  styleUrls: ['./main-body-component.component.scss']
})
export class MainBodyComponentComponent implements OnInit {


  sections: any[] = [
    {
      "title": "Latest",
      "cards": [
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
    },
    {
      "title": "Hot",
      "cards": [
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
    },
    {
      "title": "Comedy",
      "cards": [
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
    },
    {
      "title": "Romantic",
      "cards": [
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
    },
    {
      "title": "Drama",
      "cards": [
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
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
