import { Inject, inject, Injectable } from '@angular/core';
import { TranslationService } from './translation.service';
import { LocalStorageService } from './local-storage.service';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
private readonly keyName = "lang";
private readonly defaultLang = "ar";
private html:HTMLElement;
private currentLang:string 

constructor(private translationService:TranslationService,
            private localStorageService:LocalStorageService,
            @Inject(DOCUMENT) private document:Document) 
            { 
              this.html = this.document.getElementsByTagName('html')[0];
              this.currentLang = this.localStorageService.getItem(this.keyName) || this.defaultLang 
            }
  initialAppLanguage():void{
    this.translationService.setDefaultLang(this.currentLang);
    this.setLang(this.currentLang) 
  }
  changeLang(lang:string):void{
    this.translationService.Use(lang);
    this.setLang(lang)
  }

  getDirection():string
  {
    return this.currentLang == this.defaultLang ? "rtl":"ltr"
  }
  updateLayout():void
  {
    this.html.lang = this.currentLang
    this.document.body.dir = this.getDirection()
  }
  setLang(lang:string):void
  {
    this.currentLang = lang
    this.localStorageService.setItem(this.keyName,lang);
    this.updateLayout()
  }
}
