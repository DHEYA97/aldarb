import { Component, ElementRef, OnInit } from '@angular/core';
import { SharedModule } from '../../Shared/Module/shared/shared.module';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent{}