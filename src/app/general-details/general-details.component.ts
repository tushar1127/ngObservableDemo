import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'general-details',
  templateUrl: './general-details.component.html',
  styleUrls: ['./general-details.component.css']
})
export class GeneralDetailsComponent implements OnInit {
  form: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
   this.form =  this.fb.group({
      one:['', Validators.required],
      two:['', Validators.required],
      three:['', Validators.required],
      four:['', Validators.required],
    })
  }

  saveForm(){
   this.form.invalid;
   if(this.form.valid){
     alert('all good!')
   }
  }

  


}
