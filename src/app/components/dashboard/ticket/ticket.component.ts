import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from '../../../models/ticket';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  tickets:Ticket[]=[];

  onAdd($event: { title: string; request: string; }) {
    this.tickets.push( {
      title:$event.title,
      id:Math.random.toString(),
      request:$event.request,
      status:'open'
    })
  }
}
