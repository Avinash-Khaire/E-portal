import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-effects',
  templateUrl: './tab-effects.component.html',
  styleUrls: ['./tab-effects.component.scss']
})
export class TabEffectsComponent implements OnInit {
public switch:boolean=false;
public switch1:boolean=false;
public flag:boolean=false;
public mobile:boolean = true;
@Input() public Heading!:string;
  constructor() { }

  ngOnInit(): void {
   
  }
  changeSwitch(){
    this.flag = !this.flag;
  }
 
}
