import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Back, Power1} from 'gsap'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ionviewdidenter(){

  }

  movetohome(){
    this.navCtrl.navigateRoot("/preloading");
  }

  toggleSrc(currentImage){
    if( this.imgSrc === './assets/sandbox/relic-respect-off.png'){
      this.imgSrc  = './assets/sandbox/relic-respect-on.gif'
    } else {
      this.imgSrc = './assets/sandbox/relic-respect-off.png'
    }
      }

}
