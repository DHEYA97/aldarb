import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/Module/shared/shared.module';
import { AddTextBeforeAfterDirective } from '../../Core/Directive/add-text-before-after.directive';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [SharedModule,AddTextBeforeAfterDirective],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss'
})
export class MissionComponent {

}
