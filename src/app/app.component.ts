import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Niru';
  value :boolean  = true;
  onClick(){
    return this.value=!this.value;
  }
  num:number =10;
}
