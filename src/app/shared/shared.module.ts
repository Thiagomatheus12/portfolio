import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { CardProjectsComponent } from './components/card-projects/card-projects.component';
import { CardTechnologiesComponent } from './components/card-technologies/card-technologies.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MyprofileComponent,
    CardProjectsComponent,
    CardTechnologiesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    MyprofileComponent,
    CardProjectsComponent,
    CardTechnologiesComponent
  ]
})
export class SharedModule { }
