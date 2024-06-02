import { Component, Input } from '@angular/core';
import { Film } from 'src/app/shared/models/interfaces';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent {
  @Input() film! : Film;
}
