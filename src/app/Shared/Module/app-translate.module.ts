import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';

import { TranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

const httpLoaderFactory = (http:HttpClient)=> new TranslateHttpLoader(http,'/i18n/','.json');
const translateLoader:Provider = {
  provide : TranslateLoader,
  useFactory : httpLoaderFactory,
  deps:[HttpClient]
}

const translatecompilerFactory = ()=> new TranslateMessageFormatCompiler();
const translatecompiler:Provider = {
  provide : TranslateCompiler,
  useFactory : translatecompilerFactory,
}



@NgModule()
export class AppTranslateModule {
  static forRoot(): ModuleWithProviders<AppTranslateModule> {
    return TranslateModule.forRoot({
      loader:translateLoader,
      compiler:translatecompiler
    });
  }
  static forChild(): ModuleWithProviders<AppTranslateModule> {
    return TranslateModule.forRoot({
      loader:translateLoader,
      compiler:translatecompiler,
      isolate:false
    });
  }
}
