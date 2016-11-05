import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ApplicationsService } from './services/applications.service';
import { ApplicationDetailsComponent } from './application-details/application-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationsComponent,
    DashboardComponent,
    ApplicationDetailsComponent
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
        path: 'applications/:name',
        component: ApplicationDetailsComponent
      }
    ])
  ],
  providers: [ApplicationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
