import { Injectable } from '@angular/core';
import { Howl} from 'howler';
import { GlobalService } from './global.service';


@Injectable({
  providedIn: 'root'
})
export class SoundService {

  howlBackground: Howl;


  constructor(public gs : GlobalService) { }

  playBackground(code){
    
    

   let source = (this.gs.soundData['soundEngine']['background'][code]['source'])

    console.log("playing background - " + source)
    
        this.howlBackground = new Howl({
          src: source,
          html5: true,
          loop: true,
          volume: 0.2,
          autoplay: true,
          buffer: true,
          preload: true,
          onend: () => {
            //  this.playbackEnded = true;
          }
        });
    
    this.howlBackground.play();
    
      }
    
    stopBackground(){
      
      this.howlBackground.stop();
      
    }

}
