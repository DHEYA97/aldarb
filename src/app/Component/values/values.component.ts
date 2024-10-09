import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/Module/shared/shared.module';
@Component({
  selector: 'app-values',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './values.component.html',
  styleUrl: './values.component.scss'
})
export class ValuesComponent {

}
