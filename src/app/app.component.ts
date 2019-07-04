import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test = '';
  simpleConsole(data) {
    console.log(data);
    this.test = data;
  }
}

