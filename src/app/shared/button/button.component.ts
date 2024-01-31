import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
})
export class ButtonComponent  implements OnInit {
  @Input() buttonText: string; // Add this line
  @Input() buttonType: string; // Add this line
  @Input() width: string; // Add this line

  constructor() { }

  ngOnInit() {}

}
