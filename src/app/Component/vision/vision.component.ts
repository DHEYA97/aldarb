import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../Shared/Module/shared/shared.module';
import { Router } from '@angular/router';
import AOS from 'aos';
@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss'
})
export class VisionComponent {}
