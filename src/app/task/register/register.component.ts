import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TryService } from '../../try.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  val: any;
  constructor(private jet: TryService) {}

  ngOnInit() {
    this.val = this.jet.arr;
  }
  currentIndex: any;

  newform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(36),
    ]),
    dprt: new FormControl(''),
    mail: new FormControl('', [Validators.required]),
    pswrd: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  get name() {
    return this.newform.get('name');
  }
  get age() {
    return this.newform.get('age');
  }
  get mail() {
    return this.newform.get('mail');
  }
  get pswrd() {
    return this.newform.get('pswrd');
  }
  add() {
    let data = this.newform.value;
    this.val.push(data);
  }
  
  update() {
    this.val[this.currentIndex] = this.newform.value;
  }

}
