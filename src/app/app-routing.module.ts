import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CardNotebookComponent,
  CardPhoneComponent,
  CardTvComponent,
} from './card/components';
import { route } from './posts/routes';

const routes: Routes = [
  { path: 'notebook', component: CardNotebookComponent },
  { path: 'phone', component: CardPhoneComponent },
  { path: 'tv', component: CardTvComponent },
  ...route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
