import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  team = []

  constructor() { }

  ngOnInit() {
    this.team = [
      {
        name: 'Debajyoti Dasgupta',
        url: 'https://avatars.githubusercontent.com/u/23581364?v=4',
        desc: 'Software Developer',
      },
    ]
  }

}
