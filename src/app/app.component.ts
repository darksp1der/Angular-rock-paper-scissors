import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RockPaperScissorsComponent } from './player-computer/player-computer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RockPaperScissorsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rock Paper Scissors Game';
}

