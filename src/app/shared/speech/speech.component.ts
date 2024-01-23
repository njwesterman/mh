import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss'],
  standalone: true,
  imports: [IonicModule]

})
export class SpeechComponent implements OnInit, OnDestroy {
  showNarrate: boolean;
  showDialog: boolean;
  positionTop: boolean;
  showContinue: boolean;

  private narrateSub: Subscription;
  private dialogSub: Subscription;
  private positionSub: Subscription;
  private continueSub: Subscription;

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
    this.narrateSub = this.speechService.showNarration$.subscribe(show => {
      this.showNarrate = show;
    });
    this.dialogSub = this.speechService.showDialog$.subscribe(show => {
      this.showDialog = show;
    });
    this.positionSub = this.speechService.positionTop$.subscribe(show => {
      this.positionTop = show;
    });
    this.continueSub = this.speechService.showContinue$.subscribe(show => {
      this.showContinue = show;
    });

  }

  ngOnDestroy() {
    
    this.narrateSub.unsubscribe();
    this.dialogSub.unsubscribe();
this.positionSub.unsubscribe();
this.continueSub.unsubscribe();
  }
}
  

   








