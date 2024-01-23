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
import { GlobalService } from '../services/global.service';
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
    console.log('UpdateService: Constructor', updates.isEnabled);
    if ((!isPlatform('ios') && !isPlatform('android')) && (!isPlatform('capacitor') || isPlatform('mobileweb') || isPlatform('desktop'))) {
      this.isDesktop = true
    }

    if (updates.isEnabled && environment.production && this.isDesktop) {
      this.isServiceWorkerRunning = true;
      updates.versionUpdates.subscribe(async evt => {
        console.log('UpdateService: versionUpdates', evt);
        switch (evt.type) {
          case 'VERSION_DETECTED':
            this.versionCheck = 'Downloading Latest Version...'
            console.log(`Downloading new app version: ${evt.version.hash}`);
            break;
          case 'VERSION_READY':
            console.log(`Current app version: ${evt.currentVersion.hash}`);
            console.log(`New app version ready for use: ${evt.latestVersion.hash}`);
            this.versionCheck = 'Checking Version...'
            await updates.activateUpdate();
     //    add in a sleep command here
            this.versionCheck = 'Ready to go!'
            this.versionReady = true
           
            location.reload();
           
            break;
          case 'VERSION_INSTALLATION_FAILED':
            this.versionCheck = 'Error installing new version'
            console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
            break;
          case 'NO_NEW_VERSION_DETECTED':
      //      await this.gs.loadData();
            this.versionCheck = 'Ready to go!'
            this.versionReady = true
            console.log("You are on the latest version");
            break;
        }
      });

    }
  }
  async ngOnInit() {
    await this.initializeApp();
    //  let audioPlayer = <HTMLVideoElement> document.getElementById("myVideo");
    //  audioPlayer.play();
    if (this.updates.isEnabled && environment.production && this.isDesktop) {
      this.versionCheck = 'Checking Version...'
      await this.updates.checkForUpdate();
    } else {
      this.versionReady = true
    }
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
  async initializeApp() {
    await this.platform.ready();
    //await this.localizationService.setInitialAppLanguage();
  }
  movetohome() {
    this.navCtrl.navigateRoot("/home");
  }
movetohome2(){
  this.navCtrl.navigateRoot('investigate/intro');
}

}
