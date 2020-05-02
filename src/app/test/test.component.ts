import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  @Input("appParam") public appTitle;
  @Output("childParam") public childEvent = new EventEmitter();
  public name:string = "Tony"
  public siteUrl = window.location.href;
  public isDisabled:boolean = false;
  public hasError = true;
  public greeting = "";
  public isTrue = true;
  public color = 'blue';
  public messageStyle = {
    "text-success": true,
    "text-danger": false,
    "text-special": true

  }
  public titleStyle = {
    color: 'blue',
    fontStyle: 'italic'
  }
  public colors = ["red","yellow","blue","white"];

  constructor() { }
  fireEvent(){
    this.childEvent.emit("message from test component!")
  }
  onClick(event,msg){
    console.log("test",event.type)
    this.greeting = `test the button ${msg.value}`
  }

  ngOnInit(): void {
  }

  greetUser() {
    return `wellcome to ${this.name} world!`
  }

}
