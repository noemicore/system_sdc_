import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CalendarComponent } from './page/calendar/calendar.component';
import { WorkshopComponent } from './page/workshop/workshop.component';
import { SeminarsComponent } from './page/seminars/seminars.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'workshop',
    component: WorkshopComponent
  },
  {
    path: 'seminars',
    component: SeminarsComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
