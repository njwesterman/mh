import { ApplicationRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { IonApp, IonRouterOutlet, NavController, IonButton } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
import { CommonModule } from '@angular/common';  

import { Subscription, interval } from 'rxjs';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [CommonModule,IonApp, IonRouterOutlet, IonButton],
})


export class AppComponent  implements OnInit {

  versionReady = false;
  versionCheck = 'Initiating...'
  

  serviceWorkerReady = 'Checking for Service Worker'

  constructor( private updates: SwUpdate, public navCtrl: NavController,  
    private platform: Platform
    ) {
      console.log('UpdateService: Constructor', updates.isEnabled);


      // This shouldn't be necessary but is a try to get the versionUpdates. Doesn't do it either.
     // interval(10000).subscribe(() => {
      //    console.log('UpdateService: Checking for Updates')
      //    updates.checkForUpdate();
    //  });
if(updates.isEnabled && environment.production){
  
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
                  await updates.activateUpdate();
                 this.versionReady = true
                 this.versionCheck = 'Ready to go!'

                  location.reload();
                  break;    
              case 'VERSION_INSTALLATION_FAILED':
                this.versionCheck = 'Error installing new version'
                  console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
                  break;
              case 'NO_NEW_VERSION_DETECTED':
                this.versionCheck = 'Ready to go!'
                this.versionReady = true
                  console.log("You are on the latest version");
                  
                  break;
          }
      });

    //  updates.activateUpdate().then(() => {
    //    console.log('YUP I AM RUNNING');
    //    this.isReady = true
  //    });


    }
  }


  async ngOnInit() {
    await this.initializeApp();

    if(this.updates.isEnabled && environment.production){
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/ngsw-worker.js').then((registration) => {
        registration.installing; // the installing worker, or undefined
        registration.waiting; // the waiting worker, or undefined
        registration.active; // the active worker, or undefined

        registration.addEventListener('updatefound', () => {
          this.updateServiceWorker(registration);
        });
      });
    }
  } else{
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

  async initializeApp() {
    await this.platform.ready();
    //await this.localizationService.setInitialAppLanguage();

  }
    

  movetohome(){
    this.navCtrl.navigateRoot("/preloading");
  }

    }
      
    
   
    




//Progressive web API angular ionic and hosted on firebase. This is for mighty heroes and will allow us to cache stuff
//https://www.npmjs.com/package/@angular/service-worker
//https://ionicframework.com/docs/angular/pwa

//Audio
//https://howlerjs.com/

//https://www.npmjs.com/package/core-js


//maybe
//https://webpack.js.org/concepts/module-federation/



//https://act.hoyoverse.com/puzzle/bh3/pz_chEDkDxrPW/index.html?utm_source=mainweb