import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-davidavi-imgs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './davidavi-imgs.component.html',
  styleUrl: './davidavi-imgs.component.css'
})
export class DavidaviImgsComponent {
  images: string[] = [
    'davikindle.jpg',
    'davidavidavi-oi-amigo-tudo-bem.jpg',
    'davidentidade_visual_atualizada_davidavidavidavidavi.png',
    'so-long-and-goodnight.jpg'
  ];
}
