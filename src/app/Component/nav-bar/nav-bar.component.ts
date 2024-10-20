import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from '../../Shared/Module/shared/shared.module';
import { LanguageService } from '../../Core/Service/language.service';
import { TranslationService } from '../../Core/Service/translation.service';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  @Output() scrollToFooter = new EventEmitter<void>();
  activeSection: string = 'home';
  items: any = null;

  goToFooter() {
    this.scrollToFooter.emit();
  }
  constructor(private route: ActivatedRoute,private router:Router,private languageService:LanguageService,private _translateService: TranslationService) {}
  ngOnInit() {
    // Subscribe to fragment changes
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scrollToSection(fragment);
      }
    });
    this._translateService.getItems().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error('Error fetching service items:', error);
      }
    );
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
      const extraOffset = 100; // Adjust this value as needed
      window.scrollTo({
        top: offsetTop - extraOffset,
        behavior: 'smooth',
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about', 'vision', 'mission', 'goals','values','service','project','contact-us'];
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
getKeys(obj: any): string[] {
  return Object.keys(obj);
}
navigateToService(id: number) {
  this.router.navigate(['/service', id]);
}
}
