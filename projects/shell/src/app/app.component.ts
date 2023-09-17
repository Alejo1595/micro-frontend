import { Component } from '@angular/core';
import { NabvarReactComponent } from './shared/components/nabvar-react/nabvar-react.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-nabvar-react />
    <loading />
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [NabvarReactComponent, LoadingComponent, RouterOutlet],
})
export class AppComponent {}
