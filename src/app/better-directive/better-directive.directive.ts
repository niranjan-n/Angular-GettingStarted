import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit{
  @Input() defaultColor='transparent';
  @Input() highlightColor='green';
  @HostBinding('style.backgroundColor') backgroundColor=this.defaultColor;
  constructor(private eleRef:ElementRef,private renderer:Renderer2) { 
  }
  ngOnInit(){
    this.backgroundColor=this.defaultColor;
  //  this.renderer.setStyle(this.eleRef.nativeElement,'background-color','orange');
  }
  @HostListener('mouseenter') mouseEnter(eventData:Event){
     //this.renderer.setStyle(this.eleRef.nativeElement,'background-color','orange');
    //this.backgroundColor='green';
    this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseLeave(eventData:Event){
     // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','transparent');
     this.backgroundColor=this.defaultColor;
  }
}
