import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { registerRoutes } from './app/register.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(registerRoutes)],
});
