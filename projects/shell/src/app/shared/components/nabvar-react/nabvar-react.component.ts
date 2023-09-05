import { AfterContentInit, Component } from '@angular/core';
import { mount } from 'mf_navbar/reactApp';
@Component({
  selector: 'app-nabvar-react',
  template: `<div id="react-navbar"></div>`,
  standalone: true,
})
export class NabvarReactComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    const fetchEl = document.getElementById('react-navbar');
    mount(fetchEl);
  }
}
