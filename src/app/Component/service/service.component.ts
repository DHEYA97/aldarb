import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../Shared/Module/shared/shared.module';
import { TranslationService } from '../../Core/Service/translation.service';
import { Items } from '../../Core/interface/item';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements OnInit {
  items: any = null;

  constructor(private translateService: TranslationService) {}

  ngOnInit(): void {
    this.translateService.getItems().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error('Error fetching service items:', error);
      }
    );
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}