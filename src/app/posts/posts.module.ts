import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EducationComponent,
  ProgrammingComponent,
  TripsComponent,
} from './components';

@NgModule({
  declarations: [TripsComponent, ProgrammingComponent, EducationComponent],
  imports: [CommonModule],
  exports: [TripsComponent, ProgrammingComponent, EducationComponent],
})
export class PostsModule {}
