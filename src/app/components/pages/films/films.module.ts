import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsComponent } from './films.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';

@NgModule({
    declarations: [
        FilmsComponent,
        ExpansionPanelComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class FilmsModule { }
