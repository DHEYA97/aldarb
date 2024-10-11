import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/Module/shared/shared.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
email:string = "info@aldarb-sa.com";
date:any = new Date().getFullYear()
}
