import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass3-directives',
  templateUrl: './ass3-directives.component.html',
  styleUrls: ['./ass3-directives.component.css']
})
export class Ass3DirectivesComponent implements OnInit {
  flag = true;
  Student = ['George', 'Nick', 'John'];
  currentName = '';

  Add() {
    this.Student.push(this.currentName);
  }

  toggleFlag() {
    this.flag = !this.flag;
    return this.flag;
  }

  getColor() {
    if (this.flag == true)
      return 'green';
    else
      return 'red';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
