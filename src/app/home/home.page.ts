import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Back, Power1} from 'gsap'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Howl, Howler} from 'howler';
import { TweenMax } from 'gsap';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage {
  constructor(public navCtrl: NavController) { }
  imgSrc = './assets/sandbox/relic-respect-off.png'
  imgSrcMouse = './assets/sandbox/relic-respect-off.png'
  howl: Howl;
  howl_levelup: Howl;


  ionViewDidEnter(){
    this.howl = new Howl({
      src: './assets/sandbox/sound2.mp3',
      html5: true,
      loop:true,
      preload: true,
      onend: () => {
      //  this.playbackEnded = true;
      }
    });

    this.howl.play();

    this.howl_levelup = new Howl({
      src: './assets/sandbox/sound3.mp3',
      html5: true,
      preload: true,
      onend: () => {
      //  this.playbackEnded = true;
      }
    });
    
    
  }

  movetohome(){
    this.howl.stop();
    this.navCtrl.navigateRoot("/preloading");
  }

  toggleSrc(currentImage){




    if( this.imgSrc === './assets/sandbox/relic-respect-off.png'){
      this.howl_levelup.play();
      this.imgSrc  = './assets/sandbox/relic-respect-on.gif'
    } else {
      this.howl_levelup.stop();
      this.imgSrc = './assets/sandbox/relic-respect-off.png'
    }
      }

}
