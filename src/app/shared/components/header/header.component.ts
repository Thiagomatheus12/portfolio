import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menus = [
    { label: 'Sobre mim', id: 'about-me' },
    { label: 'Portfólio', id: 'portfolio' },
    { label: 'Tecnologias', id: 'technologies' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  navigate(idElement: string): void {
    location.href = "#" + idElement;
  }

}
