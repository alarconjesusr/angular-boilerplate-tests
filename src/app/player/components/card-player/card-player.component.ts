import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

interface CardPlayer {
  name: string;
  title: string;
  side: 'left' | 'right';
}

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',  
  imports: [CommonModule],
})
export class CardPlayerComponent {
  player = input<CardPlayer>();
}
