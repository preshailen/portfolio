import { Component, OnInit } from '@angular/core';
import Projects from '../Projects';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: Projects[];

  constructor(private ps: ProjectsService) { }

  ngOnInit() {
    this.ps
           .getProjects()
           .subscribe((data: Projects[]) => {
              this.projects = data;
           });
  }

}
