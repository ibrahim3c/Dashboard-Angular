import { Component,ContentChild,ElementRef,HostBinding,HostListener,inject,Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  // host element: element that the component selected by selector like here <app-control/>
  host:{
    class:'control',
    '(click)':'onClick()'
  }

})
export class ControlComponent {
  // old way to add class to host but not recommended usee the host:{} in the @Component
  // @HostBinding('class') className="control"

  // alternative way to add event to .......
  // @HostListener('click') onClick(){
  //   console.log("clicked")
  // }

  @Input() title="";

  // access host element
  private el=inject(ElementRef)

  @ContentChild("input")private control?:ElementRef<HTMLInputElement|HTMLTextAreaElement>;

  
  onClick(){
    console.log("clicked")
    console.log(this.el)
    console.log(this.control)
  }

}
