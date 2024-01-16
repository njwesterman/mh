import { Injectable } from '@angular/core';
import * as $ from "jquery"
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class speechService {
  private _showSpeech = new BehaviorSubject<boolean>(false);
  showSpeech$ = this._showSpeech.asObservable();

  constructor() { }
  speedForward: number = 100 //Typing Speed
  speedWait: number = 1000 // Wait between typing and backspacing
  speedBetweenLines: number = 100 //Wait between first and second lines
  speedBetweenParagraphs: number = 1000 //Backspace Speed
  
  showSpeech: boolean = false;

  async startTyping() {
    var textArray = [
      "Once upon a time in the futuristic city of NeoTech, where advanced technology and artificial intelligence ruled, there was a peculiar creation known as the Robo Raven. ",
      "And sometimes when he sneezed, he farted."
    ];

    this.showSpeechBox();
    await typeWriter('textOutput', textArray[0], this.speedForward, this.speedWait, this.speedBetweenLines,  0, false, 5000);
    await typeWriter('textOutput', textArray[1], this.speedForward, this.speedWait, this.speedBetweenLines,  0, false, 5000);
    this.hideSpeechBox();
  }
  

  
  showSpeechBox(){
    
    this._showSpeech.next(true);
    }
    
      hideSpeechBox(){
        this._showSpeech.next(false);
      }

  
}

  

  

async function typeWriter(id: any, ar: any, speedForward: any, speedWait: any, speedBetweenLines: any,  i: number, clearTypeWriter: boolean, waitBeforeNext: number) {

  return new Promise<void>(async (resolve, reject) => {
  var element = $("#" + id),
    aString = ar,
    eHeader = element.children("span")
    
eHeader.text(eHeader.text() + aString.charAt(i));

if (i < aString.length ) {
  setTimeout(() => {
    typeWriter(id, ar, speedForward, speedWait, speedBetweenLines, i + 1,  clearTypeWriter, waitBeforeNext)
      .then(() => resolve())
      .catch((error) => reject(error));
  }, speedBetweenLines);
} else if (i >= aString.length ) {
  
  await sleep(waitBeforeNext)

for (let y = 0; y < aString.length; y++) {
  eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
  await sleep(10);
}


resolve();




  
}
});




 

}


async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}