import { Component } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent {
 downloadCertificate() {
    // Implement download logic here
    const certificateContent = document.querySelector('.certificate-container')?.outerHTML;

    if (certificateContent) {
      const blob = new Blob([certificateContent], { type: 'text/html' });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'Certificate_of_Completion.html';
      a.click();

      window.URL.revokeObjectURL(url);
    }
  }
}
