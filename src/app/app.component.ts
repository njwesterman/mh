import { ApplicationRef, Component, OnDestroy} from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { IonApp, IonRouterOutlet, NavController, IonButton, Platform, isPlatform } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';  

import { environment } from 'src/environments/environment';
import { GlobalService } from './services/global.service';






@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [CommonModule,IonApp, IonRouterOutlet, IonButton ],
})


export class AppComponent {

  constructor(private updates: SwUpdate, public navCtrl: NavController, public gs : GlobalService,
    private platform: Platform
  ) {

  this.initializeApp();

  }
   
  

  async initializeApp() {
    await this.platform.ready();
    //await this.localizationService.setInitialAppLanguage();
    await this.checkPlatform();
    await this.checkVersion();
  }

async checkVersion(){
  if (this.updates.isEnabled && environment.production && this.gs.isDesktop) {
    this.navCtrl.navigateRoot("/preflight");
  } else {
    this.gs.versionReady = true
  }
}

async checkPlatform(){
  if ((!isPlatform('ios') && !isPlatform('android')) && (!isPlatform('capacitor') || isPlatform('mobileweb') || isPlatform('desktop'))) {
    this.gs.isDesktop = true
  }
}






}






