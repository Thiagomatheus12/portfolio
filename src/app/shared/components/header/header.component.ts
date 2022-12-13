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

  showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  switchModal(): void {
    this.showModal = !this.showModal;
  }


  navigate(idElement: string): void {
    location.href = "#" + idElement;
    document.getElementById('checkbox-menu')?.click();
  }

}
