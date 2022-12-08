import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MyprofileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    MyprofileComponent
  ]
})
export class SharedModule { }
