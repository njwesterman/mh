import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]

})
export class SpeechComponent implements OnInit, OnDestroy {
  showNarrate: boolean;
  showDialog: boolean;
  position: string;
  showContinue: boolean;
  avatarName: string 
  avatarImg: string;
  avatarAltImg: string;
  avatarColor: string;
  avatarFontColor: string;


  private narrateSub: Subscription;
  private dialogSub: Subscription;
  private positionSub: Subscription;
  private continueSub: Subscription;
  private avatarNameSub: Subscription;
  private avatarImgSub: Subscription;
  private avatarAltImgSub: Subscription;
  private avatarColorSub: Subscription;
  private avatarFontColorSub: Subscription;

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
    this.narrateSub = this.speechService.showNarration$.subscribe(show => {
      this.showNarrate = show;
    });
    this.dialogSub = this.speechService.showDialog$.subscribe(show => {
      this.showDialog = show;
    });
    this.positionSub = this.speechService.position$.subscribe(set => {
      this.position = set;
    });
    this.continueSub = this.speechService.showContinue$.subscribe(show => {
      this.showContinue = show;
    });

    this.avatarNameSub = this.speechService.avatarName$.subscribe(set => {
      this.avatarName = set;
    });

    this.avatarImgSub = this.speechService.avatarImg$.subscribe(set => {
      console.log('avatarImg$', set);  // Add this line

      this.avatarImg = set;
    });
    
    this.avatarAltImgSub = this.speechService.avatarAltImg$.subscribe(set => {
      this.avatarAltImg = set;
    });

    this.avatarColorSub = this.speechService.avatarColor$.subscribe(set => {
      this.avatarColor = set;
    });

    this.avatarFontColorSub = this.speechService.avatarFontColor$.subscribe(set => {
      this.avatarFontColor = set;
    });

  }

  ngOnDestroy() {
    
    this.narrateSub.unsubscribe();
    this.dialogSub.unsubscribe();
this.positionSub.unsubscribe();
this.continueSub.unsubscribe();
this.avatarNameSub.unsubscribe();
this.avatarImgSub.unsubscribe();
this.avatarAltImgSub.unsubscribe();
this.avatarColorSub.unsubscribe();
this.avatarFontColorSub.unsubscribe();

  }
}
  

   








