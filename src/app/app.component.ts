import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  projects: Array<CardProjectsData> = [
    {image: './assets/img/icon-laptoppng.png', title: 'Project', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat ducimus nobis nisi culpa cumque odio in? Blanditiis voluptatum alias tenetur cupiditate perspiciatis, velit porro eos illo neque magnam? Quia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda.', link: 'Viste o Site'},
    {image: './assets/img/icon-laptoppng.png', title: 'Project', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat ducimus nobis nisi culpa cumque odio in? Blanditiis voluptatum alias tenetur cupiditate perspiciatis, velit porro eos illo neque magnam? Quia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda.', link: 'Viste o Site'},
    {image: './assets/img/icon-laptoppng.png', title: 'Project', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat ducimus nobis nisi culpa cumque odio in? Blanditiis voluptatum alias tenetur cupiditate perspiciatis, velit porro eos illo neque magnam? Quia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda.', link: 'Viste o Site', background: '#336'}
  ]

  technologies: Array<CardTechnologiesData> = [
    {title: 'AngularJs', image: './assets/img/icon-angular.svg'},
    {title: 'ReactJs', image: './assets/img/icon-react.svg'},
    {title: 'HTML5', image: './assets/img/icon-html5.svg'},
    {title: 'CSS3',image: './assets/img/icon-css3.svg'}
  ]
}


