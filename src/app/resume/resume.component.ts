import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }
  pdfSrc = '../assets/Presh_cv.pdf';
  downloadFile() {
      const link = document.createElement('a');
      link.download = 'Preshailen_cv';
      link.href = '../assets/Presh_cv.pdf';
      link.click();
  }
  ngOnInit() {
  }

}
