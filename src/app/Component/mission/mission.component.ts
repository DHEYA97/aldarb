import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/Module/shared/shared.module';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss'
})
export class MissionComponent {

}
