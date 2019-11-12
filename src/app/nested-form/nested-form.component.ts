import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  form = new FormGroup({
    name: new FormGroup({
      first: new FormControl('', [Validators.required, Validators.minLength(2)]),
      last: new FormControl('', Validators.required),
      middle: new FormControl('', Validators.required),
      father: new FormControl('', Validators.required)
    }),
    email: new FormControl(),
    random: new FormControl()
  });

  get first(): any { return this.form.get('name.first'); }

  get name(): any { return this.form.get('name'); }

  onSubmit() {
    console.log("inner form control",this.first.value);
    console.log("inner form",this.name.value);
    console.log("form",this.form.value);
    console.log(this.form.status);
  }

  setPreset() { this.name.setValue({ first: 'Bess', last: 'Marvin' }); }

  constructor() { }
  ngOnInit() { }
}
