import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Howl, Howler } from 'howler';
import gsap from "gsap";
import { Observable, Subscription, fromEvent } from 'rxjs';
import { SpeechService } from '../../services/speech.service';
import { SpeechComponent } from '../../shared/speech/speech.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SpeechComponent]
})
export class HomePage implements AfterViewInit, OnDestroy {
  @ViewChild('parentContainer') parentContainer: ElementRef;
  constructor(public navCtrl: NavController, public speechService: SpeechService) { }
  imgSrc = './assets/sandbox/relic-respect-off.png'
  speech2 = './assets/sandbox/speech/blank.png';
  speech1 = './assets/sandbox/speech/blank.png';
  speech3 = './assets/sandbox/speech/blank.png';
  speech4 = './assets/sandbox/speech/blank.png';
  imgSrcMouse = './assets/sandbox/relic-respect-off.png'
  howl: Howl;
  howlf1: Howl;
  howlf2: Howl;
  howlf3: Howl;
  forceHide: boolean = false;
  howl2: Howl;
  howl3: Howl;
  howl4: Howl;
  howl5: Howl;
  howl6: Howl;
  howlsad: Howl;
  howl7: Howl;
  howl8: Howl;
  canClick: boolean = false;
  howl_levelup: Howl;
  isSepia: boolean = false;
  width: number;
  tween1: any;
  tween2: any;
  tween3: any;
  tween4: any;
  tween5: any;
  tween6: any;
  tween7: any;
  tween8: any;
  tween9: any;
  tween10: any;
  tween11: any;
  endScene: boolean = false;
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  ngAfterViewInit() {
    this.width = this.parentContainer.nativeElement.offsetWidth;
    this.scene1();
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
      this.width = this.parentContainer.nativeElement.offsetWidth;
      console.log(this.width)
      this.tween1.invalidate()
      this.scene1();
    });
  }
  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }
  async anim1() {
   // this.tween2.kill();
    this.width = this.parentContainer.nativeElement.offsetWidth;
    this.tween2 = gsap.to(".weasel", {
      duration: 1,
      x: () => this.width * 1,
      // xPercent: 20, // offset by the width of the box
      rotation: 0,
      ease: "none",
      paused: false,
      scrub: 1,
      invalidateOnRefresh: true,
      onComplete: async () => {
        this.speech2 = './assets/sandbox/speech/blank.png';
        await sleep(1000);
        this.endScene = true;
      },
    });
    this.tween2.play();
  }
  async scene5() {
    this.speech4 = './assets/sandbox/speech/blank.png';
    this.speech3 = './assets/sandbox/speech/blank.png';
    this.speech2 = './assets/sandbox/speech/blank.png';
    this.tween8 = gsap.to(".relic-gem", {
      duration: 0,
      opacity: 0,
      display: 'none',
      ease: "none",
    });
    this.tween8.play();
    this.tween8.invalidate();
  


    this.howlsad = new Howl({
      src: './assets/sandbox/sad.mp3',
      html5: true,
      loop: true,
      preload: true,
    
    });

    if (this.howl2) {
      this.howl2.stop();
    }

    if (this.howl3) {
      this.howl3.stop();
    }

    this.howlsad.play();

    this.isSepia = true;
    this.tween6 = gsap.to(".thunder", {
      duration: 0,
      opacity: 0,
      display: 'none',
      ease: "none",
    });
    this.tween7 = gsap.to(".bg", {
      duration: 0,
      opacity: 1,
      display: 'block',
      ease: "none",
      onComplete: async () => {
        this.speech2 = './assets/sandbox/speech/gem_gone.gif'
        await sleep(8000);
        this.anim1();
      },
    });
    this.tween6.play();
    this.tween6.invalidate();
    await this.tween7.play();
    this.tween7.invalidate();
    //  this.tween9.play();
    //  this.tween9.invalidate();
  }
  async scene4() {
    if (this.howl) {
      this.howl.stop();
    }
    this.tween4 = gsap.to(".bg", {
      duration: 0,
      opacity: 0,
      ease: "none",
      display: 'none'
    });
    this.tween5 = gsap.to(".thunder", {
      duration: 1,
      opacity: 1,
      display: 'block',
      ease: "none",
    });
    this.howl2 = new Howl({
      src: './assets/sandbox/thunder-25689.mp3',
      html5: true,
      loop: true,
      preload: true,
      onend: () => {
        //  this.playbackEnded = true;
      }
    });
    this.howl3 = new Howl({
      src: './assets/sandbox/sound2.mp3',
      html5: true,
      loop: true,
      preload: true,
      onend: () => {
        //  this.playbackEnded = true;
      }
    });
    
    if (this.howl) {
      this.howl.stop();
    }
    this.howl2.play();
    this.howl3.play();
    this.tween4.play();
    this.tween5.play();
    await sleep(2000); // Sleep for 2 seconds
    this.speech3 = './assets/sandbox/speech/whatshappening.gif';
    await sleep(4000); // Sleep for 2 seconds
    this.speech3 = './assets/sandbox/speech/blank.png';
    this.tween6 = gsap.to(".evil-eyes", {
      duration: 4,
      opacity: 1,
      display: 'block',
      ease: "none",
      onend: async () => {
        await sleep(5000)
        this.speech4 = './assets/sandbox/speech/haha.gif';
        await sleep(7000)
        this.speech4 = './assets/sandbox/speech/pixel-speech-bubble4.gif';
        this.tween4.invalidate();
        this.tween5.invalidate();
        await sleep(10000)
        this.speech4 = './assets/sandbox/speech/blank.png';
        this.tween7Play();
      }
    });
    await this.tween6.play();
  }
  async tween7Play() {
    this.tween7 = gsap.to(".fart-bubble", {
      duration: 4,
      opacity: 1,
      display: 'block',
      ease: "none",
      onend: async () => {
        this.tween8Play();
      }
    });
    await this.tween7.play();
  }
  async tween8Play() {
    this.howlf1 = new Howl({
      src: './assets/sandbox/fart-01.wav',
      html5: true,
      loop: false,
      preload: true,
      onend: () => {
        this.howlf2.play();
      }
    });
    this.howlf2 = new Howl({
      src: './assets/sandbox/fart-02.wav',
      html5: true,
      loop: false,
      preload: true,
      onend: () => {
        this.howlf3.play();
      }
    });
    this.howlf3 = new Howl({
      src: './assets/sandbox/fart-03.wav',
      html5: true,
      loop: false,
      preload: true,
      onend: () => {
        this.forceHide = true;
        //  this.playbackEnded = true;
      }
    });
    this.tween8 = gsap.to(".fart-bubble", {
      duration: 1,
      opacity: 1,
      display: 'none',
      ease: "none",
      onend: async () => {
        this.howlf1.play();
        await sleep(3000)
        this.speech3 = './assets/sandbox/speech/mygosh.gif';
        await sleep(4000)
        this.speech3 = './assets/sandbox/speech/blank.png';
        this.speech4 = './assets/sandbox/speech/see_that.gif';
        await sleep(6000)
        this.speech4 = './assets/sandbox/speech/outofhere.gif';
        await sleep(3000)
        this.speech4 = './assets/sandbox/speech/blank.png';
        await sleep(4000)
        this.scene5();
      }
    });
    await this.tween8.play();
  }
  async scene2() {
    this.width = this.parentContainer.nativeElement.offsetWidth;
    this.tween2 = gsap.to(".weasel", {
      duration: 2,
      x: () => this.width * 0.3,
      // xPercent: 20, // offset by the width of the box
      rotation: 0,
      ease: "none",
      paused: true,
      scrub: 1,
      invalidateOnRefresh: true,
    });
    await this.tween2.play();
    this.speech2 = './assets/sandbox/speech/pixel-speech-bubble-1.gif';
    this.canClick = true;
  }
  async scene1() {
    this.endScene = false
    this.imgSrc = './assets/sandbox/relic-respect-off.png'
    this.speech2 = './assets/sandbox/speech/blank.png';
    this.speech1 = './assets/sandbox/speech/blank.png';
    this.speech3 = './assets/sandbox/speech/blank.png';
    this.speech4 = './assets/sandbox/speech/blank.png';
    this.imgSrcMouse = './assets/sandbox/relic-respect-off.png'
    this.width = this.parentContainer.nativeElement.offsetWidth;
   
    //await this.speechService.startTyping0();

    await this.speechService.loadDialog("narrator",'narD_01','p1','',false,'investigate')

    
   
    this.tween1 = gsap.to(".weasel", {
      duration: 2,
      x: () => this.width * 0.1,
      // xPercent: 20, // offset by the width of the box
      rotation: 0,
      ease: "none",
      paused: true,
      scrub: 1,
      invalidateOnRefresh: true,
      onComplete: async () => {

       this.speech1 = './assets/sandbox/speech/look_at_this_relic.gif';
        await sleep(5000); // Sleep for 2 seconds
        this.speech1 = './assets/sandbox/speech/blank.png';

        
        //await this.speechService.loadDialog("river",'rivD_100','p1','',false,'investigate')

        await this.scene2();
      },
    });
    await this.tween1.play();
    //  
    // this.canClick = true;
  }
  async scene3() {
    this.tween3 = gsap.to(".weasel", { rotation: 360, duration: 5, ease: "elastic" });
    await this.tween3.play();
    //gsap.killTweensOf(".weasel");
    this.tween3.invalidate();
  }
  async ionViewDidEnter() {




    //this.scene1()
    //this.scene3()
    this.howl = new Howl({
      src: './assets/sandbox/sound1.mp3',
      html5: true,
      loop: true,
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
  movetohome() {
    this.howl.stop();
    alert('lets not. bye bye')

    //this.navCtrl.navigateRoot("/preloading");
  }
  async toggleSrc() {
    if (this.canClick) {
      this.speech2 = './assets/sandbox/speech/blank.png';
      if (this.imgSrc === './assets/sandbox/relic-respect-off.png') {
        this.howl_levelup.play();
        this.imgSrc = './assets/sandbox/relic-respect-on.gif'
        await this.scene3();
        this.tween3.invalidate();
        this.howl_levelup.stop();
        this.imgSrc = './assets/sandbox/relic-respect-off.png'
        this.speech2 = './assets/sandbox/speech/wtf.gif';
        await sleep(4000);
        this.howl.stop();
        this.scene4();
      }
    }
  }
}
async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}