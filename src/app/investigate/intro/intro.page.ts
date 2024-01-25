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
      await this.speech.loadDialog("narrator",'narD_01','p0','FAILnarV_01',false,'investigate')
      await this.speech.loadDialog("narrator",'narD_100','p0','FAILnarV_100',false,'investigate')

      await this.speech.loadDialog("robo",'robD_01','p0','FAILrobV_01', false,'investigate')
      await this.speech.loadDialog("dusty",'dusD_01','p0','FAILdusV_01', false,'investigate')
      await this.speech.loadDialog("billie",'bilD_01','p0','FAILbilV_01', false,'investigate')
      await  this.speech.loadDialog("narrator",'narD_02','p0','FAILnarV_02', false,'investigate')
      

      alert("NO MORE")
    });








  }

}
