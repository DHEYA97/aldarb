import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Items } from '../interface/item';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private translateService:TranslateService) { }
  setDefaultLang(lang: string): void
  {
    this.translateService.setDefaultLang(lang)
  }
  
  Use(lang:string):Observable<any>{
    return this.translateService.use(lang)
  }
  getTranslation(key: string): string {
    return this.translateService.instant(key);
  }
  getItems(): Observable<any> {
    return this.translateService.get('service.items');
  }
}