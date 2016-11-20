import { Component, OnInit } from '@angular/core';

import { ApplicationListItem } from './list-item';
import { Application } from '../entities';
import { ApplicationsService } from '../services/applications.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  applications: ApplicationListItem[];
  showDeleteActions: boolean;
  selectedApplication: Application;

  constructor(
    private applicationsService: ApplicationsService
  ) { }

  ngOnInit() {
    this.applicationsService.find()
      .then(applications => this.applications = applications.map(m => new ApplicationListItem(m)));
  }

  isSelectedApplication(app) {
    return app.id === this.selectedApplication.id;
  }

  showDeleteConfirmation($event, app: Application) {
    this.showDeleteActions = true;
    this.selectedApplication = app;
  }

  deleteApplication($event, app: Application) {
    this.selectedApplication = null;

    this.applicationsService.deleteByName(app.name)
    // .then(() => );
  }

  cancelDeleteApplication($event, app) {
    this.showDeleteActions = false;
    this.selectedApplication = null;
  }
}
