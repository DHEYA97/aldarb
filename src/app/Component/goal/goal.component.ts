import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../Shared/Module/shared/shared.module';
import { LanguageService } from '../../Core/Service/language.service';

@Component({
  selector: 'app-goal',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.scss'
})
export class GoalComponent implements OnInit {
  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    // الاشتراك في حدث تغيير اللغة
    this.languageService.langChanged.subscribe(lang => {
      this.updateSvgDirection();
    });
    
    // تحديث اتجاه الـ SVG عند بدء المكون
    this.updateSvgDirection();
  }

  updateSvgDirection(): void {
    // تحديد جميع عناصر SVG ذات الكلاسات المحددة
    const svgElements = document.querySelectorAll<SVGSVGElement>('.arraw-up svg, .arraw-down svg')
    svgElements.forEach(svgElement => {
      if (this.languageService.getDirection() === 'ltr') {
        svgElement.style.transform = 'scaleX(-1)'; // عكس الاتجاه
      } else {
        svgElement.style.transform = 'scaleX(1)'; // إعادة الاتجاه إلى الطبيعي
      }
    });
  }
}