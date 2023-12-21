import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Back, Power1} from 'gsap'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




@Component({
  selector: 'app-preloading',
  templateUrl: './preloading.page.html',
  styleUrls: ['./preloading.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PreloadingPage implements OnInit {

  constructor(public navCtrl: NavController) { }
imgSrc = './assets/temp/relic-respect-off.png'
imgSrcMouse = './assets/temp/relic-respect-off.png'

  ngOnInit() {

    let audioPlayer = <HTMLVideoElement> document.getElementById("myVideo");

audioPlayer.play();
// Get the video

  }


  toggleSrc(currentImage){
if( this.imgSrc === './assets/temp/relic-respect-off.png'){
  this.imgSrc  = './assets/temp/relic-respect-on.gif'
} else {
  this.imgSrc = './assets/temp/relic-respect-off.png'
}
  }

  movetohome(){
    this.navCtrl.navigateRoot("/home");
  }
}
