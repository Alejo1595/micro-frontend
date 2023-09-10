import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { PanelLeftComponent } from './components/panel-left/panel-left.component';
import { PanelRightComponent } from './components/panel-right/panel-right.component';

@NgModule({
  declarations: [RegisterComponent, PanelLeftComponent, PanelRightComponent],
  imports: [CommonModule, RegisterRoutingModule, FormsModule],
})
export default class RegisterModule {}
