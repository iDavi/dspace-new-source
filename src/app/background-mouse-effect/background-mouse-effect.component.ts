import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { TitleImageTextCardComponent } from '../title-image-text-card/title-image-text-card.component';

@Component({
  selector: 'app-background-mouse-effect',
  standalone: true,
  imports: [TitleImageTextCardComponent],
  templateUrl: './background-mouse-effect.component.html',
  styleUrls: ['./background-mouse-effect.component.css']
})
export class BackgroundMouseEffectComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bgCanvas') bgCanvas!: ElementRef;
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private animationFrameId: number = 0;
  private mouseMoveHandler!: (event: MouseEvent) => void;
  
  // For slow rain effect
  private rainDrops: { x: number, y: number, speed: number, letter: string }[] = [];
  private maxDrops: number = 10;

  ngAfterViewInit() {
    this.canvas = this.bgCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas.bind(this));
    // Always add mouse effect
    this.mouseMoveHandler = this.handleMouseMove.bind(this);
    document.addEventListener('mousemove', this.mouseMoveHandler);
    this.initRainEffect();
  }
  
  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  index = 0
  initRainEffect() {
    const letters = 'davi';
    const draw = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.font = '20px monospace';
      
      this.ctx.fillStyle = 'rgba(0, 0, 155, 0.7)';
      if (this.index >= letters.length) {
        this.index = 0
      }
      // Auto add a new drop if not exceeding max drops
      if (this.rainDrops.length < this.maxDrops && Math.random() < 0.02) {
        const letter = letters.charAt(this.index);
        this.rainDrops.push({
          x: Math.random() * this.canvas.width,
          y: 0,
          speed: 0.5 + Math.random() * 0.5, // very slow drop
          letter
        });
        this.index += 1
      }
      
      // Update and draw each drop
      for (let drop of this.rainDrops) {
        this.ctx.fillText(drop.letter, drop.x, drop.y);
        drop.y += drop.speed;
      }
      
      // Remove drops off-screen
      this.rainDrops = this.rainDrops.filter(drop => drop.y < this.canvas.height);
      
      this.animationFrameId = requestAnimationFrame(draw);
    };
    draw();
  }
  index2 = 0
  handleMouseMove(event: MouseEvent) {
    const letters = 'davi';
    const letter = letters.charAt(Math.floor(Math.random() * letters.length));
    // Always add a new drop on mouse move
    if (letters.length >= this.index2){
      this.index2 = 0
    }
    this.rainDrops.push({
      x: event.clientX,
      y: event.clientY,
      speed: 0.5 + Math.random() * 0.5, // very slow drop
      letter
    });
    this.index2 += 1
  }
  
  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrameId);
    window.removeEventListener('resize', this.resizeCanvas.bind(this));
    if (this.mouseMoveHandler) {
      document.removeEventListener('mousemove', this.mouseMoveHandler);
    }
  }
}
