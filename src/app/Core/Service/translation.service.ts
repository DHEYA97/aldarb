import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

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
}
