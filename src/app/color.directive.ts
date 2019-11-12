import { Directive, HostBinding,HostListener } from '@angular/core';


@Directive({
    selector:"input"

})
export class ColorDirective{

    constructor(){ }

    @HostBinding("style.color") color:string;

    @HostListener("focus") setFocus() { this.color = "black"; }

    @HostListener("blur") setBlur() { this.color = "Blue"; }

}