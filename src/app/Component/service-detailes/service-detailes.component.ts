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
  styleUrl: './service-detailes.component.scss'
})
export class ServiceDetailesComponent implements OnInit, AfterViewInit{
  items: any = null;
  currentItem_id:number = 0;
  currentkey:string = '';
  constructor(private _translateService: TranslationService,private _activatedRoute:ActivatedRoute,private languageService: LanguageService){}
  
  ngOnInit(): void {
    this._translateService.getItems().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error('Error fetching service items:', error);
      }
    );
    this._activatedRoute.paramMap.subscribe(params => {
      this.currentItem_id = Number(params.get('id')); // هنا تحصل على id من الـ route
      this.currentkey = `item${params.get('id')}`;
    });

    this.languageService.langChanged.subscribe(lang => {
      this.updateSvgDirection();
    });
    this.updateSvgDirection();
  
  }
  ngAfterViewInit(): void {
    $(".service-item").click(function(e:any){
      $(".service-item").removeClass("active");
      $(e.target).parents(".service-item").addClass("active");

  });
}
getKeys(obj: any): string[] {
  return Object.keys(obj);
}
Number(i:string|null):number
{
  return Number(i);
}
getActive(i:number,key:string):void
{
  this.currentkey = key;
  this.currentItem_id = ++i;
}
updateSvgDirection(): void {
  // تحديد جميع عناصر SVG ذات الكلاسات المحددة
  const svgElements = document.querySelectorAll<SVGSVGElement>('.arraw-start')
  svgElements.forEach(svgElement => {
    if (this.languageService.getDirection() === 'ltr') {
      svgElement.style.transform = 'scaleX(-1)'; // عكس الاتجاه
    } else {
      svgElement.style.transform = 'scaleX(1)'; // إعادة الاتجاه إلى الطبيعي
    }
  });
}
}
