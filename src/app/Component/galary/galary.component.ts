import { Component } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { SharedModule } from '../../Shared/Module/shared/shared.module';

@Component({
  selector: 'app-galary',
  standalone: true,
  imports: [SharedModule,SliderComponent],
  templateUrl: './galary.component.html',
  styleUrl: './galary.component.scss'
})
export class GalaryComponent {

}
