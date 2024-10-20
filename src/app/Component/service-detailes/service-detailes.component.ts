import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SharedModule } from '../../Shared/Module/shared/shared.module';
import { ProjectComponent } from "../project/project.component";
import { TranslationService } from '../../Core/Service/translation.service';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../Core/Service/language.service';
declare var $: any;

@Component({
  selector: 'app-service-detailes',
  standalone: true,
  imports: [SharedModule, ProjectComponent],
  templateUrl: './service-detailes.component.html',
  styleUrls: ['./service-detailes.component.scss']
})
export class ServiceDetailesComponent implements OnInit, AfterViewInit {
  items: any = null;
  currentItem_id: number = 0;
  currentkey: string = '';

  constructor(
    private _translateService: TranslationService,
    private _activatedRoute: ActivatedRoute,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    $('#loadingSpinner2').show();
    $('#content2').hide();

    // استدعاء العناصر عند تحميل الصفحة
    this._translateService.getItems().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error('Error fetching service items:', error);
      }
    );

    // تحديث المتغيرات عند تغيير route
    this._activatedRoute.paramMap.subscribe((params) => {
      this.currentItem_id = Number(params.get('id')) || 0;
      this.currentkey = `item${params.get('id')}`;
    });

    // تحديث اتجاه SVG عند تغيير اللغة
    this.languageService.langChanged.subscribe((lang) => {
      this.updateSvgDirection();
    });

    this.updateSvgDirection();
  }

  ngAfterViewInit(): void {
    
    $('#content2').fadeIn('slow', () => {
      $('#loadingSpinner2').fadeOut('slow');
    });
    // التعامل مع click events
    $(".service-item").on("click", (e: any) => {
      $(".service-item").removeClass("active");
      $(e.currentTarget).addClass("active");
    });
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getActive(i: number, key: string): void {
    this.currentkey = key;
    this.currentItem_id = i + 1;
  }

  updateSvgDirection(): void {
    // تحديث اتجاه SVG بناءً على اللغة الحالية
    const svgElements = document.querySelectorAll<SVGSVGElement>('.arraw-start');
    svgElements.forEach((svgElement) => {
      if (this.languageService.getDirection() === 'ltr') {
        svgElement.style.transform = 'scaleX(-1)';
      } else {
        svgElement.style.transform = 'scaleX(1)';
      }
    });
  }
}
