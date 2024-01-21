import {
  EducationComponent,
  ProgrammingComponent,
  TripsComponent,
} from './components';

export const route = [
  { path: '', component: EducationComponent },
  { path: 'programming', component: ProgrammingComponent },
  { path: 'trips', component: TripsComponent },
];
