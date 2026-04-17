import { Component } from '@angular/core';
import { CardPlayerComponent } from "./components/card-player/card-player.component";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  imports: [CardPlayerComponent],
})
export class PlayerComponent {}
