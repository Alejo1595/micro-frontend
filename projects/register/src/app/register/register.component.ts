import { Component } from '@angular/core';
import { PanelLeftComponent } from './components/panel-left/panel-left.component';
import { PanelRightComponent } from './components/panel-right/panel-right.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [PanelLeftComponent, PanelRightComponent, FormsModule],
})
export default class RegisterComponent {}
