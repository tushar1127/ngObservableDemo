import { Component, OnInit, forwardRef, Input, HostBinding, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';

@Component({
  selector: 'random-input-control',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RandomInputControlComponent),
      multi: true
    }
  ],
  template: `
  <input type="text" [placeholder] ="placeholder" [class]="class" [name]="name" [(ngModel)]="value">
  <!--
  <input type="text" [value]="textValue" [name]="name" (input)="textValue = $event.target.value" (keyup) = "onChangeTextValue($event)" />
  <input type="text" [value]="textValue" [name]="name" (input)="textValue = $event.target.value" (keyup) = "onChangeTextValue($event)"/>
  -->
  `,
  styles:[``]
})
export class RandomInputControlComponent implements ControlValueAccessor {

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }
  public textValue: string = null;

  @Input()
  name: string;
  @Input()
  class: string;

  @Input()
  placeholder: string;

  @Input('value')
  val: string | null = null;

  constructor(){}

  onChangeTextValue($event){
    this.val = $event.target.value;
    console.log("textValue", this.val);
  }

  onChange: any = () => {};
  onTouched: any = () => { };

  get value() {
    return this.val;
  }

  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) { 
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

}




/**
 * <random-input-control formControlName="random"></random-input-control>
 */