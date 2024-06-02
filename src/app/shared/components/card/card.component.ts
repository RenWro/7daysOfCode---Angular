import { Component, Input } from '@angular/core';
import { Film } from '../../models/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() results!: [];
}
