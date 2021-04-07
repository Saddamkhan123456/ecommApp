import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appThemeDirective]'
})
export class ThemeDirectiveDirective {

  constructor(private _elementRef:ElementRef,private rendrer:Renderer2) {
    // this.change();
  }

//  change(){
//   //  this._elementRef.nativeElement.style.color = "red";
//   //  this._elementRef.nativeElement.style.fontSize = "50px";
//   //  this.rendrer.setStyle( this._elementRef.nativeElement,'color','yellow');


//  }

 @HostBinding('style.border') myBorder:string ="6px solid red";

 @HostListener('mouseenter') myClick(){
 this.myBorder = '6px solid yellow';
}

@HostListener('mouseleave') myClick1(){
  this.myBorder = '6px solid blue';
 }




}



