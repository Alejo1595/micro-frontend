import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SvgMinusComponent } from './components/svg-minus/svg-minus.component';
import { SvgPlusComponent } from './components/svg-plus/svg-plus.component';

@Component({
  selector: 'app-quantity-changer',
  templateUrl: './quantity-changer.component.html',
  standalone: true,
  imports: [SvgMinusComponent, SvgPlusComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuantityChangerComponent {
  @Input()
  public productId!: number;

  @Output()
  public quantityProductChanged = new EventEmitter();

  public count = 0;

  public onDecrement = (): void => {
    this.count--;
  };

  public onIncrement = (): void => {
    this.count++;
  };

  public isBtnDisabled = (): boolean => this.count === 0;
}
