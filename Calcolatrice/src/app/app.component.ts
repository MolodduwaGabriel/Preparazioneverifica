import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calcolatrice';
  myform: FormGroup;
  valori: Number ;

  constructor(fb: FormBuilder) {

  this.myform = fb.group({
    'a': ['', Validators.required],
    'b': ['', Validators.required],



  })
  }


  /*onSum {
    if(!this.myform.invalid){
      this.ris= Number(this.myform.controls['a'])+
      Number(this.myform.controls['b']);
      this.valori=new Number();
       this.valori.a = Number(this.myform.controls['a']);
      this.valori.b = Number(this.myform.controls['b']);



  }}
  */

}

