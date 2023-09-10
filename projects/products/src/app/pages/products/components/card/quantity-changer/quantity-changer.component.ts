import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  effect,
  signal,
} from '@angular/core';
import { SvgMinusComponent } from './components/svg-minus/svg-minus.component';
import { SvgPlusComponent } from './components/svg-plus/svg-plus.component';
import { QuantityProductChanged } from '../../../models/product';

@Component({
  selector: 'app-quantity-changer',
  templateUrl: './quantity-changer.component.html',
  standalone: true,
  imports: [SvgMinusComponent, SvgPlusComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuantityChangerComponent {
  @Input({ required: true })
  public productId!: number;

  @Output()
  public quantityProductChanged = new EventEmitter<QuantityProductChanged>();

  public count = signal(0);

  constructor() {
    effect(() => {
      this.quantityProductChanged.emit({
        productId: this.productId,
        count: this.count(),
      });
    });
  }

  public onDecrement = (): void => {
    if (this.count() > 0) {
      this.count.update((count) => count - 1);
    }
  };

  public onIncrement = (): void => {
    this.count.update((count) => count + 1);
  };

  public isBtnDisabled = (): boolean => this.count() === 0;
}
