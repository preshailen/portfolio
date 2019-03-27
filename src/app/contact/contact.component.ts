import { Component, OnInit } from '@angular/core';
import { faFileMedicalAlt, faMailBulk, faEnvelope, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  faMapPin = faMapPin;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  ngOnInit() {
  }

}
