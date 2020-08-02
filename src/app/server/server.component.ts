import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId:number=10;
  status:String ="Offline";
  constructor(){
    this.status=  Math.random()>0.5?'Online':'Offline';
  }

  getServerStatus(){
    return this.status;
  }
  getColor(){
    return this.status==='Online'?'green':'red';
  }
}
