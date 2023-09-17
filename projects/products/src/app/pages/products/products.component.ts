import { AsyncPipe, DOCUMENT, NgFor, NgIf } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { tap } from 'rxjs';
import { Product } from './models/product';
import { ProductCustomService } from './services/productCustom.service';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  providers: [ProductCustomService],
  imports: [
    NgIf,
    CardComponent,
    AsyncPipe,
    NgFor,
    InfiniteScrollModule,
  ],
})
export default class ProductsComponent {
  public products: Product[] = [];
  public isShowButton = false;
  private offset = 0;
  private limit = 50;
  private readonly scrollHeight = 800;

  public document: Document = inject(DOCUMENT);
  private readonly productSvc = inject(ProductCustomService);

  ngOnInit(): void {
    this.loadProducts();
  }

  @HostListener('window:scroll')
  onWindowsScroll = () => {
    const yOffset = window.scrollY;
    const scrollTop = this.document.documentElement.scrollTop;
    this.isShowButton = (yOffset || scrollTop) > this.scrollHeight;
  };

  onTopScroll = () => {
    this.document.documentElement.scrollTop = 0;
  };

  public onScroll = () => {
    this.loadProducts();
  };

  private loadProducts = () => {
    this.productSvc
      .getProducts(this.limit, this.offset)
      .pipe(
        tap((listOfProducts) => {
          this.products = [...this.products, ...listOfProducts];
          this.offset++;
        })
      )
      .subscribe();
  };
}
