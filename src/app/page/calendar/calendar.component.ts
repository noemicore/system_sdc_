import {Component} from '@angular/core';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-calendar',
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})

export class CalendarComponent {

}
