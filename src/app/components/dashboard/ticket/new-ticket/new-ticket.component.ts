import { AfterViewInit, Component, ElementRef, OnInit, output, ViewChild, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
// export class NewTicketComponent implements AfterViewInit,OnInit {
export class NewTicketComponent{

  add=output<{title:string,request:string}>();
  @ViewChild("form")  form?:ElementRef<HTMLFormElement>;

  // ngAfterViewInit(): void {
  //   console.log("after view init "+this.form) // get the form
  // }
  // constructor(){
  //   console.log("in constructor "+ this.form) // undefined
  // }
  // ngOnInit(): void {
  //   console.log("OnInit "+ this.form) // undefined
  // }


onSubmit(title:string,ticketText:string) {
  // console.log(title)
  // console.log(ticketText)
  // console.log(this.form)
  this.add.emit({title:title,request:ticketText})
  this.form?.nativeElement.reset();
}

}
