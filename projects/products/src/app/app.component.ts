import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import ProductsComponent from './pages/products/products.component';

@Component({
  selector: 'products-root',
  template: `<app-products></app-products>`,
  // template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [/* RouterOutlet, */ ProductsComponent],
})

// TODO ¿Como se puede manejar el tema de rutas hijas con los standalone components?

/*
  Tengo las rutas para el mf de products en donde sino viene nada en el path llama al componente standalone ProductsComponent,
  se configuraron: el en boostraps correspondiente, el webpack para que expusiera el app.componente en lugar del productComponent
  pero cuando se hace el llamado de shell hacía el appComponent de product no se llama al componente ProductsComponent :(

  Por ahora se soluciono quitanto el router-outlet y todo lo relacion para llamar directamente al componente products
  pero se desea que cuando se llame al componente appComponente de products tambien haga el llamado a las rutas y se redireccione a la que se necesita.
*/
export default class AppComponent {}
