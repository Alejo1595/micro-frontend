import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { productRoutes } from './app/products.routes';
import AppComponent from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(productRoutes),
    provideHttpClient()
  ],
});
