import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CntArray = [];
  title = 'DataBinding-Assignmemt';
  GameStarted(Count: number) {
    this.CntArray.push(Count);
  }

}
