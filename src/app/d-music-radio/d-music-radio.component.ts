import { NgForOf } from '@angular/common';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-d-music-radio',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './d-music-radio.component.html',
  styleUrls: ['./d-music-radio.component.css']
})
export class DMusicRadioComponent implements OnInit, AfterViewInit {
  tracks: string[] = ['creep-radiohead', 'the-ghost-of-you-mcr', 'helena-mcr', 'pastel-ghost', 'angel-of-darkness-nightcore', 'cemetery-drive-mcr'];
  currentTrack: string = '';
  musicUrl: string = '';
  isPlaying: boolean = false;
  private firstClickHandler = this.handleFirstClick.bind(this);
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;

  ngOnInit() {
    this.randomizeMusic();
  }
  
  ngAfterViewInit() {
    document.addEventListener('click', this.firstClickHandler);
  }
  
  handleFirstClick() {
    if(this.audioPlayer && this.audioPlayer.nativeElement) {
      this.audioPlayer.nativeElement.play();
      this.isPlaying = true;
    }
    document.removeEventListener('click', this.firstClickHandler);
  }
  
  randomizeMusic() {
    const randomIndex = Math.floor(Math.random() * this.tracks.length);
    this.currentTrack = this.tracks[randomIndex];
    this.musicUrl = `/music/${this.currentTrack}.mp3`;
  }

  selectTrack(track: string) {
    this.currentTrack = track;
    this.musicUrl = `music/${track}.mp3`;
    if(this.audioPlayer && this.audioPlayer.nativeElement) {
      this.audioPlayer.nativeElement.play();
      this.isPlaying = true;
    }
  }
  
  togglePlayback() {
    const audio = this.audioPlayer.nativeElement;
    if(audio.paused){
      audio.play();
      this.isPlaying = true;
    } else {
      audio.pause();
      this.isPlaying = false;
    }
  }
}
