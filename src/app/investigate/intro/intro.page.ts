import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GlobalService } from '../../services/global.service';
import { SpeechService } from 'src/app/services/speech.service';
import { SpeechComponent } from '../../shared/speech/speech.component';
import { SoundService } from 'src/app/services/sound.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SpeechComponent]
})
export class IntroPage implements OnInit {

  constructor( public gs : GlobalService, public speech : SpeechService, public sound : SoundService) { }

  ngOnInit() {

    this.gs.loadVoiceData().subscribe(async () => {
      this.sound.playBackground('bg01')    
      await this.speech.loadDialog("robo",'robD_01','bottom','robV_01')
      await this.speech.loadDialog("dusty",'dusD_01','bottom','dusV_01')
      await this.speech.loadDialog("billie",'bilD_01','bottom','bilV_01')
      await  this.speech.loadDialog("narrator",'narD_02','bottom','narV_02')
  //   await this.speech.loadDialog("narrator",'narD_01','bottom','narV_01')
  //  await  this.speech.loadDialog("narrator",'narD_02','bottom','narV_02')
    });








  }

}
