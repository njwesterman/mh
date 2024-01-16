import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import anime from 'animejs/lib/anime.es';
import { speechService } from '../services/speech.service';
import { SpeechComponent } from '../shared/speech/speech.component';


@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.page.html',
  styleUrls: ['./mod1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SpeechComponent]
})
export class Mod1Page {

  constructor(public speechService: speechService ) { }

  ngOnInit() {
  }

  async ionViewDidEnter(){

  await this.speechService.startTyping();
  //await this.speech.startTyping2();

}

}
