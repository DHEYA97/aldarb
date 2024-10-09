import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmptyComponent } from '../../Component/empty/empty.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AddTextBeforeAfterDirective } from '../../../Core/Directive/add-text-before-after.directive';

const modeuls = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  TranslateModule,
  ]
  const components = [
  EmptyComponent
  ]
  const directive = [
    AddTextBeforeAfterDirective
    ]
@NgModule({
  declarations: [
    components
  ],
  imports: [
    modeuls,directive
  ],
  exports:[
    ...modeuls,...components,...directive
  ]
})
export class SharedModule { }