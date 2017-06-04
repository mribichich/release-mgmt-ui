import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Application } from '../entities';
import { ApplicationsService } from '../services/applications.service';

@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrls: ['./application-create.component.scss']
})
export class ApplicationCreateComponent implements OnInit {
  submitted: boolean;
  application: Application;

  constructor(
    private router: Router,
    private applicationsService: ApplicationsService
  ) { }

  ngOnInit() {
    this.application = new Application();
  }

  goBack() {
    this.router.navigate(['/applications']);
  }

  cancel() {
    this.goBack();
  }

  save(invalid: boolean) {
    this.submitted = true;

    if (invalid) {
      return;
    }

    this.applicationsService.create(this.application)
      .then(() => this.goBack())
      .catch((res) => console.log(res))
  }
}
