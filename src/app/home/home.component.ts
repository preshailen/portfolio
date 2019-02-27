import { Component, OnInit } from '@angular/core';
import { faHtml5, faAngular, faJava, faPhp, faMicrosoft, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  faHtml5 = faHtml5;
  faAngular = faAngular;
  faJava = faJava;
  faPhp = faPhp;
  faMicrosoft = faMicrosoft;
  faDatabase = faDatabase;
  faCss3 = faCss3;
  faJs = faJs;
  ngOnInit() {
  }

}
