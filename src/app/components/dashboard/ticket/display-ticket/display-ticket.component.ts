import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../../../../models/ticket';

@Component({
  selector: 'app-display-ticket',
  standalone: true,
  imports: [],
  templateUrl: './display-ticket.component.html',
  styleUrl: './display-ticket.component.css'
})
export class DisplayTicketComponent {
data=input.required<Ticket>();
detailsVisible=signal(false)
close=output();

onToggle(){
  this.detailsVisible.update(wasVisible=>!wasVisible)
  console.log(this.detailsVisible)
}
onMarkCompleted(){
  this.close.emit()
}
}
