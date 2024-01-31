import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Back, Power1 } from 'gsap'
import { CommonModule } from '@angular/common';  
import { IonApp, IonRouterOutlet, NavController, IonButton, Platform, isPlatform } from '@ionic/angular/standalone';

import { NgModule } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Howl, Howler } from 'howler';
import { SwUpdate } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { GlobalService } from '../../services/global.service';
@Component({
  selector: 'app-preloading',
  templateUrl: './preloading.page.html',
  styleUrls: ['./preloading.page.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonButton,  CommonModule],
})
export class PreloadingPage implements OnInit {
  versionReady = false;
  versionCheck = 'Initiating...'
  isDesktop = false;
  isServiceWorkerRunning = false;
  serviceWorkerReady = 'Checking for Service Worker'
  constructor(private updates: SwUpdate, public navCtrl: NavController, public gs : GlobalService,
    private platform: Platform
  ) {
   
   
  }
  async ngOnInit() {
    
  }
  updateServiceWorker(registration) {
    const installingWorker = registration.installing;
    if (installingWorker == null) return;
    installingWorker.onstatechange = () => {
      if (installingWorker.state === 'installed') {
        if (navigator.serviceWorker.controller) {
          this.serviceWorkerReady = 'Downloading Assets'
          console.log('New content is available and will be used when all tabs for this page are closed.');
        } else {
          console.log('Content is cached for offline use.');
          this.serviceWorkerReady = 'Assets downloaded'
          location.reload();
        }
      }
    };
  }
  ionViewDidLoad(): void {
  }

  movetohome() {
   this.navCtrl.navigateRoot("/home");
//this.navCtrl.navigateRoot('no/no');
  }


}
