import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArithmaticService } from '../services/Arithmatic.service';

@Component({
  selector: 'app-arithmatic',
  templateUrl: './arithmatic.component.html',
  styleUrls: ['./arithmatic.component.css']
})
export class ArithmaticComponent implements OnInit {
  
  form = new FormGroup({
    a: new FormControl(null, [Validators.required]),
    b: new FormControl(null, [Validators.required])
  });
  
  constructor(private arithmaticService:ArithmaticService) {

  }
  
  ngOnInit() {
  console.log(this.form.value)
  }

  onSubmit(){
    if(this.form.valid){
    console.log(this.form.value);

    let _add = this.arithmaticService.add(this.form.value.a,this.form.value.b);
    console.log("------------------------------");

    let _substract = this.arithmaticService.substract(this.form.value.a,this.form.value.b);
    console.log("------------------------------");

    let _divide = this.arithmaticService.divide(this.form.value.a,this.form.value.b);
    console.log("------------------------------");

    let _multiply = this.arithmaticService.multiply(this.form.value.a,this.form.value.b);
    console.log("------------------------------");
    
      console.log('_add',_add)
      console.log('_substract',_substract)
      console.log('_divide',_divide)
      console.log('_multiply',_multiply)

      // if we use setTimeOut function call are not executed in order

  }

  }
}
