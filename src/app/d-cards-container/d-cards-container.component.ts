import { Component } from '@angular/core';
import { DMusicRadioComponent } from "../d-music-radio/d-music-radio.component";
import { MessageComponent } from "../message/message.component";
import { TitleImageTextCardComponent } from "../title-image-text-card/title-image-text-card.component";

@Component({
  selector: 'app-d-cards-container',
  standalone: true,
  imports: [DMusicRadioComponent, MessageComponent, TitleImageTextCardComponent],
  templateUrl: './d-cards-container.component.html',
  styleUrl: './d-cards-container.component.css'
})
export class DCardsContainerComponent {

}
