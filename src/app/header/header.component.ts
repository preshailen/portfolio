import { Component, OnInit } from '@angular/core';
import { faCode, faFolderOpen, faFile, faMailBulk, faInfo } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  faCode = faCode;
  faFolderOpen = faFolderOpen;
  faFile = faFile;
  faMailBulk = faMailBulk;
  faInfo = faInfo;
  ngOnInit() {
  }

}
