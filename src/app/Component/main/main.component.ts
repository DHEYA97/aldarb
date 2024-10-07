import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/Module/shared/shared.module';
import { AddTextBeforeAfterDirective } from '../../Core/Directive/add-text-before-after.directive';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SharedModule,AddTextBeforeAfterDirective],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  downloadPDF(): void {
    const pdfUrl = '/pdf/Al-Darb Company Profile.pdf'; // استبدل بـ اسم الملف PDF

    // إنشاء عنصر رابط لتنزيل الملف
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'filename.pdf'; // الاسم الذي سيظهر عند التحميل
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
