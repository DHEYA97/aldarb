import { AfterViewInit, Component } from '@angular/core';
import { SharedModule } from '../../Shared/Module/shared/shared.module';
declare var $: any;

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent  {

}
