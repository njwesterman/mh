import { Injectable } from '@angular/core';
import * as $ from "jquery"
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class speechService {
  private _showNarration = new BehaviorSubject<boolean>(false);
  showNarration$ = this._showNarration.asObservable();
  private _showDialog = new BehaviorSubject<boolean>(false);
  showDialog$ = this._showDialog.asObservable();
  private _positionTop = new BehaviorSubject<boolean>(false);
  positionTop$ = this._positionTop.asObservable();

  constructor() { }
  speedForward: number = 10 //Typing Speed
  speedWait: number = 10 // Wait between typing and backspacing
  speedBetweenLines: number = 10 //Wait between first and second lines
  speedBetweenParagraphs: number = 10 //Backspace Speed
  showNarration: boolean = false;
  showDialog: boolean = false;
  
  
  async startTyping() {
    var textArray = [
      "In the heart of the Australian outback, under a vast blue sky, the world thrives thanks to this relic. This powerful symbol has long kept us safe somehow.",
      "This is River, the little rat thing that protects the relic."
    ];
    this.showNarrationBox('top');
    await typeWriter('narrateOutput', textArray[0], this.speedForward, this.speedWait, this.speedBetweenLines, 0, false, 5000);
    await typeWriter('narrateOutput', textArray[1], this.speedForward, this.speedWait, this.speedBetweenLines, 0, false, 5000);
    this.hideNarrationBox();
  }
  async startDialog() {
    var textArray = [
      "The relic is beautiful, it's shiny green gem protects us from stuff somehow. "
    ];
    this.showDialogBox('bottom');
    await typeWriter('dialogOutput', textArray[0], this.speedForward, this.speedWait, this.speedBetweenLines, 0, false, 8000);
    this.hideDialogBox();
    
  }



  showDialogBox(position) {
    if(position==='top'){
      this._positionTop.next(true);
    } else {
      this._positionTop.next(false);
    }
    this._showDialog.next(true);
  }
  hideDialogBox() {
    this._showDialog.next(false);
  }
  showNarrationBox(position) {
    if(position==='top'){
      this._positionTop.next(true);
    } else {
      this._positionTop.next(false);
    }
    this._showNarration.next(true);
  }
  hideNarrationBox() {
    this._showNarration.next(false);
  }
 
 
}
async function typeWriter(id: any, ar: any, speedForward: any, speedWait: any, speedBetweenLines: any, i: number, clearTypeWriter: boolean, waitBeforeNext: number) {
  return new Promise<void>(async (resolve, reject) => {
  
  
  
  
  
    var element = $("#" + id),
      aString = ar,
      eHeader = element.children("span")
    eHeader.text(eHeader.text() + aString.charAt(i));
    if (i < aString.length) {
      setTimeout(() => {
        typeWriter(id, ar, speedForward, speedWait, speedBetweenLines, i + 1, clearTypeWriter, waitBeforeNext)
          .then(() => resolve())
          .catch((error) => reject(error));
      }, speedBetweenLines);
    } else if (i >= aString.length) {
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