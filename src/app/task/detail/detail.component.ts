import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  edit(i) {
    this.currentIndex = i;
    this.newform.patchValue({
      name: this.val[i].name,
      age: this.val[i].age,
      dprt: this.val[i].dprt,
      mail: this.val[i].mail,
      pswrd: this.val[i].pswrd,
    });
    alert('You Want Edit The Value');
  }
  delete(i: any) {
    this.val.splice(i, 1);
    alert('Are You Sure You Want Delete');
  }
}