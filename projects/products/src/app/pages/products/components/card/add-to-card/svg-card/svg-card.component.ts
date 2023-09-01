import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-svg-card',
  templateUrl: './svg-card.component.svg',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgCardComponent {}
