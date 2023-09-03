import { Component, Input } from '@angular/core';
import { Product, QuantityProductChanged } from '../../models/product';
import { CurrencyPipe, NgIf, TitleCasePipe } from '@angular/common';
import { AddToCardComponent } from './add-to-card/add-to-card.component';
import { QuantityChangerComponent } from './quantity-changer/quantity-changer.component';
import { ImageComponent } from './image/image.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [
    TitleCasePipe,
    CurrencyPipe,
    AddToCardComponent,
    QuantityChangerComponent,
    NgIf,
    ImageComponent
  ],
  standalone: true,
})
export class CardComponent {
  @Input() public product!: Product;

  private productAndCount!: QuantityProductChanged;

  public onQuantityProductChange(productAndCount: QuantityProductChanged): void {
    this.productAndCount = productAndCount;
  }

  public onAddProduct(productId: number): void {}

  private showProductAddedText(): void {}
}
