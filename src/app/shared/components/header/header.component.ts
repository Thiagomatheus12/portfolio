import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menus = [
    { label: 'Sobre mim', id: 'about-me' },
    { label: 'Portfólio', id: 'portfolio' },
    { label: 'Tecnologias', id: 'technologies' }
  ]

  showModal = false;

  navigate(idElement: string): void {
    location.href = "#" + idElement;
    document.getElementById('checkbox-menu')?.click();
  }

}
