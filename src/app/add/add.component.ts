import { Component, OnInit, Injectable } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Injectable()
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pService: ProjectsService;
  constructor(pService: ProjectsService) {
    this.pService = pService;
  }

  ngOnInit() {
  }
  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
       return;
    }
    // tslint:disable-next-line: max-line-length
    this.pService.addProject(submittedForm.value.title, submittedForm.value.type, submittedForm.value.github, submittedForm.value.demo, submittedForm.value.description);
    console.log(submittedForm.value);
  }
}

