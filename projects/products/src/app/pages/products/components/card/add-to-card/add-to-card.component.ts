import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SvgCardComponent } from './svg-card/svg-card.component';

@Component({
  selector: 'app-add-to-card',
  template: `
    <button (click)="addToCard()" class="bg-gray-300 p-1.5 rounded-md text-lg">
      <app-svg-card />
    </button>
  `,
  standalone: true,
  imports: [SvgCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddToCardComponent {
  @Input()
  public productId!: number;

  @Output()
  public addProduct = new EventEmitter();

  public addToCard = (): void => this.addProduct.emit(this.productId);
}
