import { Injectable } from '@angular/core';
import * as $ from "jquery"
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash' 
import { GlobalService } from './global.service';
import * as e from 'express';
import { VoiceService } from './voice.service';


@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  private _showNarration = new BehaviorSubject<boolean>(false);
  showNarration$ = this._showNarration.asObservable();
  private _showDialog = new BehaviorSubject<boolean>(false);
  showDialog$ = this._showDialog.asObservable();
  private _showContinue = new BehaviorSubject<boolean>(false);
  showContinue$ = this._showContinue.asObservable();
  private _positionTop = new BehaviorSubject<boolean>(false);
  positionTop$ = this._positionTop.asObservable();

  constructor(public gs : GlobalService, public voice: VoiceService) { }
  speedForward: number = 10 //Typing Speed
  speedWait: number = 10 // Wait between typing and backspacing
  speedBetweenLines: number = 10 //Wait between first and second lines
  speedBetweenParagraphs: number = 10 //Backspace Speed
  showNarration: boolean = false;
  showDialog: boolean = false;
  showContinue:boolean = false;
  




  async loadDialog(who, code, position, voice){

console.log(this.gs.speechConfig['continue'] )
 let textToSay = ((this.gs.speechData['speechEngine']['players'][who][code]))

 let voiceToSpeek = (this.gs.voiceData['voiceEngine']['players'][who][voice])

this.voice.playVoice(voiceToSpeek)

 

 if(who === 'narrator'){
  this.showNarrationBox(position);
  await this.typeWriter('narrateOutput', textToSay, this.speedForward, this.speedWait, this.speedBetweenLines, 0, false, 5000);
  this.hideNarrationBox();

 }



}










//START THIS CAN BE DELETED
  
  async startTyping0() {
    var textArray = [
      "In the heart of the Australian outback, under a vast blue sky, the world thrives thanks to this relic. This powerful symbol has long kept us safe somehow.",
      "This is River, the little rat thing that protects the relic."
    ];
    this.showNarrationBox('top');
    await this.typeWriter('narrateOutput', textArray[0], this.speedForward, this.speedWait, this.speedBetweenLines, 0, false, 5000);
    await this.typeWriter('narrateOutput', textArray[1], this.speedForward, this.speedWait, this.speedBetweenLines, 0, false, 5000);
    this.hideNarrationBox();
  }
  async startDialog0() {
    var textArray = [
      "The relic is beautiful, it's shiny green gem protects us from stuff somehow. "
    ];
    this.showDialogBox('bottom');
    await this.typeWriter('dialogOutput', textArray[0], this.speedForward, this.speedWait, this.speedBetweenLines, 0, false, 8000);
    this.hideDialogBox();
    
  }

//END - THIS CAN BE DELETED

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
    this._showContinue.next(false)
  }
  showNarrationBox(position) {
    if(position==='top'){
      this._positionTop.next(true);
    } else {
      this._positionTop.next(false);
    }
    this._showContinue.next(false);
    this._showNarration.next(true);
  }
  hideNarrationBox() {
    this._showNarration.next(false);
  }
 
   showContinueBox() {
    this._showContinue.next(true);
  }

 
  async typeWriter(id: any, ar: any, speedForward: any, speedWait: any, speedBetweenLines: any, i: number, clearTypeWriter: boolean, waitBeforeNext: number) {
    return new Promise<void>(async (resolve, reject) => {
      var element = $("#" + id),
        aString = ar,
        eHeader = element.children("span")

      eHeader.text(eHeader.text() + aString.charAt(i));
      if (i < aString.length) {
        setTimeout(() => {
          this.typeWriter(id, ar, speedForward, speedWait, speedBetweenLines, i + 1, clearTypeWriter, waitBeforeNext)
            .then(() => resolve())
            .catch((error) => reject(error));
        }, speedBetweenLines);
      } else if (i >= aString.length) {
    
       
   

        this.showContinueBox();
     //   await this.gs.sleep(waitBeforeNext);
     element.on('click touchstart', async () => {
      this.voice.stopVoice();
      eHeader.text('');
      resolve();
    });
      }
    });
  }


}









