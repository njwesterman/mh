import { ApplicationRef, Component, OnDestroy} from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { IonApp, IonRouterOutlet, NavController, IonButton, Platform, isPlatform } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';  

import { environment } from 'src/environments/environment';
import { GlobalService } from '../services/global.service';





@Component({
  selector: 'app-preflight',
  templateUrl: './preflight.page.html',
  styleUrls: ['./preflight.page.scss'],
  standalone: true,
  imports: [CommonModule,IonApp, IonRouterOutlet, IonButton ],

})
export class PreflightPage  {

  versionCheck = 'Initiating...'
  isServiceWorkerRunning = false;
  serviceWorkerReady = 'Checking for Service Worker'
  constructor(private updates: SwUpdate, public navCtrl: NavController, public gs : GlobalService,
    private platform: Platform
  ) {
    this.checkForUpdates()
  }
   

  async checkForUpdates(){
    console.log('UpdateService: Constructor', this.updates.isEnabled);
if (this.updates.isEnabled && environment.production) {
  this.versionCheck = 'Checking Version...'
    await this.updates.checkForUpdate();
  this.isServiceWorkerRunning = true;
  this.updates.versionUpdates.subscribe(async evt => {
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
        await this.updates.activateUpdate();
        this.versionCheck = 'Ready to go!'
        this.gs.versionReady = true
        location.reload();
        break;
      case 'VERSION_INSTALLATION_FAILED':
        this.versionCheck = 'Error installing new version'
        console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
        break;
      case 'NO_NEW_VERSION_DETECTED':
        this.versionCheck = 'Ready to go!'
        this.gs.versionReady = true
        this.navCtrl.navigateRoot("/start");
        console.log("You are on the latest version");
        break;
    }
  });
}}







 
}
