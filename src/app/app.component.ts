import { ApplicationRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { IonApp, IonRouterOutlet, NavController, IonButton, isPlatform } from '@ionic/angular/standalone';
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


export class AppComponent   {

}