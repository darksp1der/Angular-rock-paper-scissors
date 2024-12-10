import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player-computer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './player-computer.component.html',
  styleUrls: ['./player-computer.component.css']
})
export class RockPaperScissorsComponent {
  choices: { name: string, image: string }[] = [
    { name: 'rock', image: 'rock.png' },
    { name: 'paper', image: 'paper.png' },
    { name: 'scissors', image: 'scissors.png' }
  ];
  playerChoice: string = '';
  computerChoice: string = '';
  result: string = '';
  playerScore: number = 0;
  computerScore: number = 0;

  play() {
    if (!this.playerChoice) return;

    this.computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)].name;
    
    if (this.playerChoice === this.computerChoice) {
      this.result = "It's a tie!";
    } else if (
      (this.playerChoice === 'rock' && this.computerChoice === 'scissors') ||
      (this.playerChoice === 'paper' && this.computerChoice === 'rock') ||
      (this.playerChoice === 'scissors' && this.computerChoice === 'paper')
    ) {
      this.result = 'You win!';
      this.playerScore++;
    } else {
      this.result = 'Computer wins!';
      this.computerScore++;
    }
  }

  resetGame() {
    this.playerChoice = '';
    this.computerChoice = '';
    this.result = '';
    this.playerScore = 0;
    this.computerScore = 0;
  }

  getImageForChoice(choice: string): string {
    return this.choices.find(c => c.name === choice)?.image || '';
  }
}