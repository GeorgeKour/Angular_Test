import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass4-directives',
  templateUrl: './ass4-directives.component.html',
  styleUrls: ['./ass4-directives.component.css']
})
export class Ass4DirectivesComponent implements OnInit {
  pflag = true;
  times = 0;

  Toggledisplay() {
    this.pflag = !this.pflag;
    return this.pflag;
  }

  clicked() {
    this.times++;
    console.log("Button has clicked " + this.times + " times!");
  }

  getColor() {
    if(this.times>=5){
        return 'Red';
    }
    return 'Black';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
