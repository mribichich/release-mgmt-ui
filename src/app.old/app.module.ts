import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ApplicationsService } from './services/applications.service';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { ApplicationCreateComponent } from './application-create/application-create.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ApplicationsComponent,
    DashboardComponent,
    ApplicationDetailsComponent,
    ApplicationCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'applications',
        component: ApplicationsComponent
      },
      {
        path: 'applications/create',
        component: ApplicationCreateComponent
      }, 
      {
        path: 'applications/:name',
        component: ApplicationDetailsComponent
      }
    ])
  ],
  providers: [ApplicationsService],
  bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
