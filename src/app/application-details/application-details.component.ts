import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Application } from '../entities';
import { ApplicationsService } from '../services';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss']
})
export class ApplicationDetailsComponent implements OnInit {
  application: Application;

  constructor(
    private applicationsService: ApplicationsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let name = params['name'];
      this.applicationsService.findByName(name)
        .then(data => this.application = data);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
