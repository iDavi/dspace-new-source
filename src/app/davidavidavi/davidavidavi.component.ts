import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-davidavidavi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './davidavidavi.component.html',
  styleUrl: './davidavidavi.component.css'
})
export class DavidavidaviComponent {
  /**
   * Controls the direction of the scrolling text
   * @default 'left'
   */
  @Input() direction: 'left' | 'right' = 'left';
}