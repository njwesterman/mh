import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import anime from 'animejs/lib/anime.es';
import { SpeechService } from '../../services/speech.service';
import { SpeechComponent } from '../../shared/speech/speech.component';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.page.html',
  styleUrls: ['./mod1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SpeechComponent]
})
export class Mod1Page {

  constructor(public speechService: SpeechService, public gs: GlobalService ) { }

  ngOnInit() {
  }

  async ionViewDidEnter(){


  //await this.speechService.startTyping();
 //await this.speechService.startDialog0();

}

}
