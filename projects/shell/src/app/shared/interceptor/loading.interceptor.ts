import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

// @Injectable()
// export class LoadingInterceptor implements HttpInterceptor {
//   private loadingSvc = inject(LoadingService);

//   intercept(
//     req: HttpRequest<unknown>,
//     next: HttpHandler
//   ): Observable<HttpEvent<unknown>> {
//     this.loadingSvc.start();
//     return next.handle(req).pipe(finalize(() => this.loadingSvc.stop()));
//   }
// }

export const LoadingInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const loadingSvc = inject(LoadingService);
  loadingSvc.start();
  return next(req).pipe(finalize(() => loadingSvc.stop()));
};
