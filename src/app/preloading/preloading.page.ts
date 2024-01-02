import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonicModule, NavController } from '@ionic/angular';
import { Back, Power1} from 'gsap'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {Howl, Howler} from 'howler';



@Component({
  selector: 'app-preloading',
  templateUrl: './preloading.page.html',
  styleUrls: ['./preloading.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PreloadingPage implements OnInit {

  howl: Howl;

  constructor(public navCtrl: NavController) { }


  ngOnInit() {

    let audioPlayer = <HTMLVideoElement> document.getElementById("myVideo");

audioPlayer.play();
// Get the video

this.howl = new Howl({
  src: './assets/sandbox/sound1.mp3',
  html5: true,
  preload: true,
  onend: () => {
  //  this.playbackEnded = true;
  }
});

this.howl.play();


  }




  movetohome(){
    this.howl.stop();
    this.navCtrl.navigateRoot("/home");
  }
}
