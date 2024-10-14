import { Component, OnInit } from '@angular/core';
import { SharedModule } from './Shared/Module/shared/shared.module';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { LanguageService } from './Core/Service/language.service';
import { FooterComponent } from "./Component/footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'New-Angular-Course';  
  constructor(private LanguageService:LanguageService,private _router: Router){}
  ngOnInit(): void {
    this.initialAppLanguage()
  }
  
  initialAppLanguage():void{
    this.LanguageService.initialAppLanguage();

    this._router.navigateByUrl('/home').then(() => {
      // Update the URL in the browser without pushing a new history entry
      history.replaceState({}, '', '/');
    });
  }
  scrollToFooter(): void {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}