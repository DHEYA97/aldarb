import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../Shared/Module/shared/shared.module';
import { AddTextBeforeAfterDirective } from '../../Core/Directive/add-text-before-after.directive';
import { LanguageService } from '../../Core/Service/language.service';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [SharedModule,AddTextBeforeAfterDirective],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  activeSection: string = 'home';
  constructor(private route: ActivatedRoute,private languageService:LanguageService) {}
  ngOnInit() {
    // Subscribe to fragment changes
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scrollToSection(fragment);
      }
    });
  }
  setActiveSection(section: string) {
    this.activeSection = section;
    setTimeout(() => {
      this.scrollToSection(section);
    }, 50);  // تأخير بسيط للتأكد من أن الصفحة انتقلت إلى المكان الصحيح
}

  private scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      const extraOffset = 110; // Adjust this value as needed
      window.scrollTo({
        top: offsetTop - extraOffset,
        behavior: 'smooth',
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about', 'message', 'vision', 'goals','values','service','project','contact-us'];
    const extraOffset = 110; // زيادة الإزاحة لضبط التنشيط في الوقت المناسب

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const topPositionWithOffset = rect.top - extraOffset;

        // تحديث activeSection فقط عندما يكون الجزء العلوي من القسم أقرب لأعلى الشاشة
        if (topPositionWithOffset <= 0 && rect.bottom > extraOffset) {
          this.activeSection = sectionId;
        }
      }
    });
  }

changeLang(lang:string):void
{
  this.languageService.changeLang(lang);
}
}
