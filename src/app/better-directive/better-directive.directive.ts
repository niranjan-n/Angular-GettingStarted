import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit{

  constructor(private eleRef:ElementRef,private renderer:Renderer2) { 
  }
  ngOnInit(){
  //  this.renderer.setStyle(this.eleRef.nativeElement,'background-color','orange');
  }
  @HostListener('mouseenter') mouseEnter(eventData:Event){
     this.renderer.setStyle(this.eleRef.nativeElement,'background-color','orange');

  }
  @HostListener('mouseleave') mouseLeave(eventData:Event){
      this.renderer.setStyle(this.eleRef.nativeElement,'background-color','transparent');

  }
}
