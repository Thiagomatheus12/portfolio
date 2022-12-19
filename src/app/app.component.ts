import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.clearFragment();
  }

  projects: Array<CardProjectsData> = [
    {image: './assets/img/icon-laptoppng.png', title: 'Project', content: 'To-do List é uma lista onde você pode armezenar suas tarefas diárias, marcar elas como finalizadas, deixando tudo organizado sem deixar nenhuma tarefa para trás.', linkTitle: 'Visite o Site', background:'rgb(10, 116, 219)', link: 'https://to-do-list-pi-green.vercel.app/'},
    {image: './assets/img/icon-laptoppng.png', title: 'To-do List', content: 'To-do List é uma lista onde você pode armezenar suas tarefas diárias, marcar elas como finalizadas, deixando tudo organizado sem deixar nenhuma tarefa para trás.', linkTitle: 'Visite o Site', link: 'https://to-do-list-pi-green.vercel.app/', background:'rgb(129 29 29)'},
    {image: './assets/img/icon-laptoppng.png', title: 'Facebook Login', content: 'Replicando a tela de login do Facebook, com validações um pouco diferente do original. Nesse projeto me dediquei bastante nas validações dos', linkTitle: 'Visite o Site', background:'rgb(27 65 163);', link: 'https://facebook-murex.vercel.app/#'}
  ]

  technologies: Array<CardTechnologiesData> = [
    {title: 'Angular', image: './assets/img/icon-angular.svg'},
    {title: 'ReactJs', image: './assets/img/icon-react.svg'},
    {title: 'HTML5', image: './assets/img/icon-html5.svg'},
    {title: 'CSS3',image: './assets/img/icon-css3.svg'}
  ]

  clearFragment(): void {
    window.location.hash = '';
  }
}


