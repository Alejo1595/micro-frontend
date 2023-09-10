import { Component, Input, OnDestroy, signal } from '@angular/core';
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
    ImageComponent,
  ],
  standalone: true,
})
export class CardComponent implements OnDestroy {
  @Input({ required: true }) public product!: Product;
  public shouldShowProductAddedText = signal(false);

  private productAndCount!: QuantityProductChanged;
  private timerId: any;

  public onQuantityProductChange(
    productAndCount: QuantityProductChanged
  ): void {
    this.productAndCount = productAndCount;
  }

  public onAddProduct(productId: number): void {
    if (this.productAndCount.productId === productId) {
      this.showProductAddedText();
      this.sendProductToCart();
    }
  }

  private showProductAddedText(): void {
    this.shouldShowProductAddedText.set(true);
    this.timerId = setTimeout(() => {
      this.shouldShowProductAddedText.set(false);
    }, 1000);
  }

  private sendProductToCart = (): void => {
    document.dispatchEvent(
      new CustomEvent('store:addToCart', {
        detail: {
          data: { product: this.product, count: this.productAndCount.count },
        },
      })
    );
  };

  ngOnDestroy(): void {
    clearTimeout(this.timerId);
  }
}
