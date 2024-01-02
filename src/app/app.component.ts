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

  }


  async ngOnInit() {
    await this.initializeApp();


    this.versionReady = true;
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