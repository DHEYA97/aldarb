import { Component } from '@angular/core';
import { MainComponent } from "../main/main.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { VisionComponent } from "../vision/vision.component";
import { MissionComponent } from "../mission/mission.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, AboutUsComponent, VisionComponent, MissionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
