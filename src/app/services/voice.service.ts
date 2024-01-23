import { Injectable } from '@angular/core';
import { Howl, Howler } from 'howler';


@Injectable({
  providedIn: 'root'
})
export class VoiceService {

  howlVoice: Howl;
  
  constructor() { }

  playVoice(src){

console.log("playing voice - " + src)

    this.howlVoice = new Howl({
      src: src,
      html5: true,
      loop: false,
      autoplay: true,
      preload: true,
      onend: () => {
        //  this.playbackEnded = true;
      }
    });

this.howlVoice.play();

  }

stopVoice(){
  
  this.howlVoice.stop();
  
}



}
