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
    '42',
    'hello friend... hello friend... thats lame... i guess i should give you a name...',
    "Raise thy sword by the light, and head to the place where the sword's light gathers.",
    "You have to be with other people, he thought. In order to live at all. I mean before they came here I could stand it... But now it has changed. You can't go back, he thought. You can't go from people to nonpeople.",
    "I don't judge, not even myself.",
    "There, at her console, he dialed 594: pleased acknowledgement of husband's superior wisdom in all matters",
    "Theory and practice sometimes clash. And when that happens, theory loses. Every single time.",
    "There is no loss, if you cannot remember what you have lost.",
    "There's a powerful group of people out there that are secretly running the world. I'm talking about the guys, no one knows about the guys who are invisible"
  ];
  
  randomPhrase: string = '';

  ngOnInit() {
    this.randomizePhrase();
  }

  randomizePhrase(): void {
    const finalPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
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
  }
}
