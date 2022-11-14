import { Injectable } from '@angular/core';

@Injectable()
export class TryService {
  constructor() { }
  arr: any = [
    {
      name: 'Kavi',
      age: 21,
      dprt: 'CSE',
      mail: 'kavi@gmail.com',
      pswrd: 'kavi113',
    },
    {
      name: 'Priya',
      age: 20,
      dprt: 'EEE',
      mail: 'priya@gmail.com',
      pswrd: 'priya11',
    },
    {
      name: 'Magesh',
      age: 22,
      dprt: 'ECE',
      mail: 'msgi@gmail.com',
      pswrd: 'mage88',
    },
    {
      name: 'Deepi',
      age: 23,
      dprt: 'CSE',
      mail: 'depi@gmail.com',
      pswrd: 'deppi66',
    },
    {
      name: 'Stell',
      age: 20,
      dprt: 'Mech',
      mail: 'stell@gmail.com',
      pswrd: 'stell55',
    },
    {
      name: 'Resh',
      age: 22,
      dprt: 'EEE',
      mail: 'resh@gmail.com',
      pswrd: 'resh22',
    },
  ];
}