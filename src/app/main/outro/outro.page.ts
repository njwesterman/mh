import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-outro',
  templateUrl: './outro.page.html',
  styleUrls: ['./outro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OutroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
