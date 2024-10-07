import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslationService } from './translation.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly keyName = "lang";
  private readonly defaultLang = "ar";
  private html: HTMLElement;
  private currentLang: string;
  private bootstrapLinkElement: HTMLLinkElement;

  constructor(
    private translationService: TranslationService,
    private localStorageService: LocalStorageService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.html = this.document.getElementsByTagName('html')[0];
    this.currentLang = this.localStorageService.getItem(this.keyName) || this.defaultLang;

    // إنشاء عنصر الرابط لتضمين ملفات الـ Bootstrap
    this.bootstrapLinkElement = this.document.createElement('link');
    this.bootstrapLinkElement.rel = 'stylesheet';
    this.document.head.appendChild(this.bootstrapLinkElement);
  }

  initialAppLanguage(): void {
    this.translationService.setDefaultLang(this.currentLang);
    this.setLang(this.currentLang);
  }

  changeLang(lang: string): void {
    this.translationService.Use(lang);
    this.setLang(lang);
  }

  getDirection(): string {
    return this.currentLang === this.defaultLang ? 'rtl' : 'ltr';
  }

  updateLayout(): void {
    this.html.lang = this.currentLang;
    this.document.body.dir = this.getDirection();
  }

  setLang(lang: string): void {
    this.currentLang = lang;
    this.localStorageService.setItem(this.keyName, lang);
    this.updateLayout();
    this.updateBootstrap();
  }

  // تحديث ملف الـ Bootstrap بناءً على اللغة
  private updateBootstrap(): void {
    const bootstrapFile = this.currentLang === 'ar' ? '/Style/bootstrap.rtl.min.css' 
                                                    : '/Style/bootstrap.min.css';
    this.bootstrapLinkElement.href = bootstrapFile;
  }
}
