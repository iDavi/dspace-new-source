import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-phrase',
  standalone: true,
  imports: [],
  templateUrl: './d-phrase.component.html',
  styleUrls: ['./d-phrase.component.css'] // updated property name
})
export class DPhraseComponent implements OnInit {
  phrases: string[] = [
    'Isnt it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it too?',
    'Dont panic!',
    "Usually you not stupid. Why stupid, question?",
    '42',
    'hello friend... hello friend... thats lame... i guess i should give you a name...',
    "Sometimes, the stuff we all hate ends up being the only way to do things.",
    "Raise thy sword by the light, and head to the place where the sword's light gathers.",
    "You have to be with other people, he thought. In order to live at all. I mean before they came here I could stand it... But now it has changed. You can't go back, he thought. You can't go from people to nonpeople.",
    "I don't judge, not even myself.",
    "There, at her console, he dialed 594: pleased acknowledgement of husband's superior wisdom in all matters",
    "Theory and practice sometimes clash. And when that happens, theory loses. Every single time.",
    "There is no loss, if you cannot remember what you have lost.",
    "shit, this actually happened, i'm talking to an imaginary person.",
    "a bug is not just a mistake. it is an error of thinking that makes you who you are.",
    "A towel is the most important item a Hitchhiker can carry.",
    "not because Hunger Games books makes us happy, but because we wanna be sedated.",
    "We're all living in each other's paranoia.",
    "Pain reminds you the joy you felt was real. More joy, then! Do not be afraid.",
    "Every path is the right path. Everything could've been anything else.﻿ And it would have just as much meaning.",
    "In chess, it's called Zugzwang...when the only viable move...is not to move.",
    "Choices ... We cannot go back. That’s why it’s hard to choose. You have to make the right choice. As long as you don’t choose, everything remains possible."
  ];
  
  randomPhrase: string = '';

  ngOnInit() {
    this.randomizePhrase();
  }
  index = Math.floor(Math.random() * this.phrases.length)
  randomizePhrase(): void {
    if (this.index >= this.phrases.length){
      this.index = 0
    }
    const finalPhrase = this.phrases[this.index];
    this.randomPhrase = '';
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < finalPhrase.length) {
        this.randomPhrase += finalPhrase.charAt(i);
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 50); // adjust delay (ms) as needed for typing effect
    this.index += 1
  }
}
