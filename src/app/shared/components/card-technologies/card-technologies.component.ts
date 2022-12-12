import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-technologies',
  templateUrl: './card-technologies.component.html',
  styleUrls: ['./card-technologies.component.scss']
})
export class CardTechnologiesComponent implements OnInit {

  @Input() data!: CardTechnologiesData;

  constructor() { }

  ngOnInit(): void {
  }

}
