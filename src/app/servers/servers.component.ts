import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
   selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer =false;
  serverCreationStatus='No server created';
  serverName='Server';
  serverCreated=false;
  userName='';
  servers= [];
  logs=[];
  isDisplay=false;
  count:number=0;
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true
    },2000)
   }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreated=true;
    this.serverCreationStatus='Server has been created'+' Name is '+this.serverName;
  }
  onUpdateServer(event:Event){
    this.serverName=  (<HTMLInputElement>event.target).value;

  }
  resetName(){
    this.userName='';
  }
  displayDetails(){
    this.logs.push(++this.count)
      this.isDisplay=!this.isDisplay;
  }
  getColorPassword(){
    return this.count>5  ?'blue':'yellow';
  }
}
