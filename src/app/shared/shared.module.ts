import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './components/description/description.component';
import { PhotoComponent } from './components/photo/photo.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    DescriptionComponent,
    PhotoComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DescriptionComponent,
    PhotoComponent,
    ProfileComponent
  ]
})
export class SharedModule { }
