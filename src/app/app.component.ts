import { Component, OnInit } from '@angular/core';
import { SharedModule } from './Shared/Module/shared/shared.module';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { LanguageService } from './Core/Service/language.service';
import { FooterComponent } from "./Component/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'New-Angular-Course';  
  constructor(private LanguageService:LanguageService){}
  ngOnInit(): void {
    this.initialAppLanguage()
  }
  
  initialAppLanguage():void{
    this.LanguageService.initialAppLanguage();
  }
}