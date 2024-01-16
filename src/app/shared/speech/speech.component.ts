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
  private sub: Subscription;

  constructor(private speechService: speechService) { }

  ngOnInit() {
    this.sub = this.speechService.showSpeech$.subscribe(show => {
      this.showNarrate = show;
    });
  }

  ngOnDestroy() {
    // Don't forget to unsubscribe to prevent memory leaks
    this.sub.unsubscribe();
  }
}
  

   








