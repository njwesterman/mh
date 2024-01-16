import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Subscription } from 'rxjs/internal/Subscription';
import { speechService } from 'src/app/services/speech.service';

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

  private narrateSub: Subscription;
  private dialogSub: Subscription;
  private positionSub: Subscription;

  constructor(private speechService: speechService) { }

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

  }

  ngOnDestroy() {
    
    this.narrateSub.unsubscribe();
    this.dialogSub.unsubscribe();
this.positionSub.unsubscribe();
  }
}
  

   








