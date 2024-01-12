import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss'],
  standalone: true,
  imports: [IonicModule]

})
export class SpeechComponent {



  @Input() name?: string;

  ionViewDidEnter() {
    
  }


  

  }

  

   


// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  






