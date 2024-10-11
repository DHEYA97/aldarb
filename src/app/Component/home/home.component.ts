import { Component } from '@angular/core';
import { MainComponent } from "../main/main.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { VisionComponent } from "../vision/vision.component";
import { MissionComponent } from "../mission/mission.component";
import { GoalComponent } from "../goal/goal.component";
import { GalaryComponent } from "../galary/galary.component";
import { ValuesComponent } from "../values/values.component";
import { ServiceComponent } from "../service/service.component";
import { ProjectComponent } from "../project/project.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, AboutUsComponent, VisionComponent, MissionComponent, GoalComponent, GalaryComponent, ValuesComponent, ServiceComponent, ProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
