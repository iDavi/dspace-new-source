import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-image-text-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './title-image-text-card.component.html',
  styleUrls: ['./title-image-text-card.component.css']
})
export class TitleImageTextCardComponent {
  @Input() title: string = 'Default Title';
  @Input() imageUrl: string = '';
  @Input() text: string = 'Default text content.';
}
