import { AsyncPipe, DOCUMENT, JsonPipe, NgIf } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import {
  takeUntilDestroyed,
  toSignal /* , toObservable */,
} from '@angular/core/rxjs-interop';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'loading',
  template: `
    <div class="overlay animate-fadeIn" *ngIf="isLoadingFlat()">
      Cargando los mejores productos...
    </div>
  `,
  styles: [
    `
      .overlay {
        font-weight: 600;
        background-color: #ffffff9c;
        display: grid;
        place-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 10;
        backdrop-filter: blur(5px);
      }
    `,
  ],
  standalone: true,
  imports: [NgIf, AsyncPipe, JsonPipe],
})
export class LoadingComponent implements OnInit {
  private readonly loadingSvc = inject(LoadingService);
  private readonly document = inject(DOCUMENT);

  public readonly isLoading$ = this.loadingSvc.isLoading$;
  public isLoadingFlat = toSignal(this.isLoading$);
  private destroyCtx = inject(DestroyRef);

  // TODO ¿Hay forma de evitar la suscripción y utilizar el signal?
  ngOnInit(): void {
    this.isLoading$
      .pipe(takeUntilDestroyed(this.destroyCtx))
      .subscribe(
        (res) => (this.document.body.style.overflow = res ? 'hidden' : 'auto')
      );

    // Intento fallido
    // toObservable(this.isLoadingFlat).subscribe(
    //   (res) => (this.document.body.style.overflow = res ? 'hidden' : 'auto')
    // );
  }
}
