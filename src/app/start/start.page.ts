import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GlobalService } from '../services/global.service';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ButtonComponent]
})
export class StartPage implements OnInit {

  constructor( public gs : GlobalService) { }

  ngOnInit() {
  }

  startGame(){
    alert('hello')
  }

}
