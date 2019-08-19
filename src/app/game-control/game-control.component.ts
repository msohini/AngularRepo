import { Component, OnInit, Output, EventEmitter, OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  cnt: number=0;
  @Output() GameStarted = new EventEmitter<{ Count:number }>();
  id;
  constructor() { }

  ngOnInit() {

  }
  onGameStarted() {
    
    this.id = setInterval(() => {
      this.GameStarted.emit({ Count: this.cnt++ });
    }, 1000);
  }
  onGameStopped() {
    if (this.id) {
      this.cnt = 0;
      clearInterval(this.id);
    }
  }
}
