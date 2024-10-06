import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmptyComponent } from '../../Component/empty/empty.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

const modeuls = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  TranslateModule,
  ]
  const components = [
  EmptyComponent
  ]
@NgModule({
  declarations: [
    components
  ],
  imports: [
    modeuls
  ],
  exports:[
    ...modeuls,...components
  ]
})
export class SharedModule { }