import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ServerStatusComponent } from "./components/dashboard/server-status/server-status.component";
import { TrafficComponent } from "./components/dashboard/traffic/traffic.component";
import { DashboardItemComponent } from './components/dashboard/dashboard-item/dashboard-item.component';
import { TicketComponent } from './components/dashboard/ticket/ticket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent,DashboardItemComponent,TicketComponent],
})
export class AppComponent {
}
