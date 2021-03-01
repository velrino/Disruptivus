import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarSharedComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }

  public isMenuCollapsed = true;

  showCharacter() {
    // this.router.navigate([`/characters/${character.alias}`]);
  }

  socials = [
    {
      class: 'fab fa-facebook-square fa-2x',
      link: 'https://facebook.com/disruptivus'
    },
    {
      class: 'fab fa-instagram fa-2x',
      link: 'https://instagram.com/disruptivus'
    }
  ];
}
