import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit{

  constructor(private eleRef:ElementRef,private renderer:Renderer2) { 
  }
  ngOnInit(){
    this.renderer.setStyle(this.eleRef.nativeElement,'background-color','orange')
  }
}
