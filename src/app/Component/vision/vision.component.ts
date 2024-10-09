import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/Module/shared/shared.module';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss'
})
export class VisionComponent {

}
