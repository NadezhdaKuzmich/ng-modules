import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardTvComponent,
  CardPhoneComponent,
  CardNotebookComponent
} from './components';

@NgModule({
  declarations: [CardTvComponent, CardPhoneComponent, CardNotebookComponent],
  exports: [CardTvComponent, CardPhoneComponent, CardNotebookComponent],
  imports: [CommonModule],
})
export class CardModule {}
