import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/Module/shared/shared.module';
import { AddTextBeforeAfterDirective } from '../../Core/Directive/add-text-before-after.directive';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [SharedModule,AddTextBeforeAfterDirective],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
