import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/Module/shared/shared.module';
import { AddTextBeforeAfterDirective } from '../../Core/Directive/add-text-before-after.directive';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [SharedModule,AddTextBeforeAfterDirective],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss'
})
export class VisionComponent {

}
