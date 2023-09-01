import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-svg-plus',
  templateUrl: './svg-plus.component.svg',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPlusComponent {}
