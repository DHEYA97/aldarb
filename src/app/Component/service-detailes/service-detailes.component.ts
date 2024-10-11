import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/Module/shared/shared.module';
import { ProjectComponent } from "../project/project.component";

@Component({
  selector: 'app-service-detailes',
  standalone: true,
  imports: [SharedModule, ProjectComponent],
  templateUrl: './service-detailes.component.html',
  styleUrl: './service-detailes.component.scss'
})
export class ServiceDetailesComponent {

}
