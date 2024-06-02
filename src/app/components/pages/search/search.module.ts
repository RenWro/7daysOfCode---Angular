import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    FormsModule,
    RouterModule
  ]
})
export class SearchModule { }
