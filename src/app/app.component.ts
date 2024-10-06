import { Component } from '@angular/core';
import { SharedModule } from './Shared/Module/shared/shared.module';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent 
{
}
