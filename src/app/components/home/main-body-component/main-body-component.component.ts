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
    },
    {
      "title": "Hot",
    },
    {
      "title": "Comedy",
    },
    {
      "title": "Romantic",
    },
    {
      "title": "Drama",
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
