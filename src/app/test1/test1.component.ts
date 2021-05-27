import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  aleatorio:Number = Math.floor( Math.random() *100);
  constructor() { }

  ngOnInit(): void {
  }

}
