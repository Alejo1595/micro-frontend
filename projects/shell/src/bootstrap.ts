import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { shellRoutes } from './app/shell.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoadingInterceptorFn } from './app/shared/interceptor/loading.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(shellRoutes),
    provideHttpClient(withInterceptors([LoadingInterceptorFn]))
  ],
});
