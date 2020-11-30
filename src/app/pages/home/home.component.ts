import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  socials = [
    {
      class: 'fab fa-facebook-square fa-3x',
      link: 'https://facebook.com/disruptivus'
    },
    {
      class: 'fab fa-instagram fa-3x',
      link: 'https://instagram.com/disruptivus'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
