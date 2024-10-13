import { Component, ElementRef, OnInit } from '@angular/core';
import { MainComponent } from "../main/main.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { VisionComponent } from "../vision/vision.component";
import { MissionComponent } from "../mission/mission.component";
import { GoalComponent } from "../goal/goal.component";
import { GalaryComponent } from "../galary/galary.component";
import { ValuesComponent } from "../values/values.component";
import { ServiceComponent } from "../service/service.component";
import { ProjectComponent } from "../project/project.component";
import { Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, AboutUsComponent, VisionComponent, MissionComponent, GoalComponent, GalaryComponent, ValuesComponent, ServiceComponent, ProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private el: ElementRef) {}

  ngOnInit(): void {
    AOS.init({
      easing: 'ease-in-out',
      once: false,
    });

    this.router.events.subscribe(() => {
      AOS.refresh();
    });

    this.observeElements();
  }

  observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate'); // Add animation class when in view
        } else {
          entry.target.classList.remove('aos-animate'); // Remove animation class when out of view
        }
      });
    });

    const elements = this.el.nativeElement.querySelectorAll('[data-aos]');
    elements.forEach((element: Element) => { // Specify the type of element
      observer.observe(element);
    });
  }
}
