import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DavidavidaviComponent } from "./davidavidavi/davidavidavi.component";
import { DspaceTitleComponent } from './dspace-title/dspace-title.component';
import { DavidaviImgsComponent } from "./davidavi-imgs/davidavi-imgs.component";
import { DPhraseComponent } from "./d-phrase/d-phrase.component";
import { DCardsContainerComponent } from "./d-cards-container/d-cards-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DavidavidaviComponent, DspaceTitleComponent, DavidaviImgsComponent, DPhraseComponent, DCardsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dspace';
}
