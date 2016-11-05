import { Component, OnInit } from '@angular/core';

import { ApplicationsService } from '../services/applications.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

applications;

  constructor(
    private applicationsService: ApplicationsService
  ) { }

  ngOnInit() {
    this.applicationsService.getApplications()
      .then(applications => this.applications = applications);
  }

}
