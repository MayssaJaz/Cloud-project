import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { timer } from 'rxjs'; 
@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css'],
})
export class AlertButtonComponent implements OnInit {
  content = 'you have been warned';
  hideContent = true;
  severity = 423;
  constructor() {}
  toggle() {
    this.hideContent = !this.hideContent;
  }
  toggleAsync() {
    timer(500).subscribe(()=>{
      this.toggle();
    })
  }

  ngOnInit(): void {
    
  }
}
