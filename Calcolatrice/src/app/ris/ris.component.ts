import { Component, OnInit, Input } from '@angular/core';
import {  FormBuilder,
 FormGroup,Validators } from '@angular/forms';



@Component({
  selector: 'app-ris',
  templateUrl: './ris.component.html',
  styleUrls: ['./ris.component.css']
})
export class RisComponent implements OnInit {
myform : FormGroup;
@Input() v: Numeri;
  constructor(fb: FormBuilder) {

    this.myform = fb.group({'email':['',Validators.required[Validators.email]]})
  }
onDubmit(){
  console.log("invio email" + this.myform.controls['email']+"ol risultato é " + v.a + "e"+ v.b)
}

  ngOnInit() {
  }

}
