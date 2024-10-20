import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../Shared/Module/shared/shared.module';
import { TranslationService } from '../../Core/Service/translation.service';
import { Items } from '../../Core/interface/item';
import { Router } from '@angular/router';
import { LanguageService } from '../../Core/Service/language.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements OnInit,AfterViewInit {
  items: any = null;
  height!:string;
  constructor(private translateService: TranslationService,private router:Router,private languageService: LanguageService) {}
  ngAfterViewInit(): void {
    this.updateServiceItemHight();
  }

  ngOnInit(): void {
    this.translateService.getItems().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error('Error fetching service items:', error);
      }
    );
    this.languageService.langChanged.subscribe(lang => {
      this.updateServiceItemHight();
    });
    this.height = this.languageService.getDirection() === 'rtl' ? "250px" : "330px";
    
    this.updateServiceItemHight();
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  navigateToService(id: number) {
    this.router.navigate(['/service', id]);
  }

  updateServiceItemHight(): void {
    const textElements = document.querySelectorAll<HTMLElement>('.text')
    textElements.forEach(textElement => {
      if (this.languageService.getDirection() === 'rtl') {
        textElement.style.height = '250px'; // عكس الاتجاه
      } else {
        textElement.style.height = '330px'; // إعادة الاتجاه إلى الطبيعي
      }
    });
  }
}