import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }
  
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    let red = this.el.nativeElement.querySelector("#red");
    switch(event.key) {
      case KEY_CODE.RIGHT_ARROW: {
        console.log(red);
        red.classList.add('move-right-to-left');
        setTimeout(() => {
          red.classList.remove('move-right-to-left');
        }, 500);
        break;
      }
      case KEY_CODE.LEFT_ARROW: {
        red.classList.add('move-left-to-right');
        setTimeout(() => {
          red.classList.remove('move-left-to-right');
        }, 500);
        break;
      }
      case KEY_CODE.UP_ARROW: {
        red.classList.add('move-up-to-down');
        setTimeout(() => {
          red.classList.remove('move-up-to-down');
        }, 500);
        break;
      }
      case KEY_CODE.DOWN_ARROW: {
        red.classList.add('move-down-to-up');
        setTimeout(() => {
          red.classList.remove('move-down-to-up');
        }, 50);
        break;
      }
    }
  }
}

export enum KEY_CODE {
  UP_ARROW = 'ArrowUp',
  DOWN_ARROW = 'ArrowDown',
  RIGHT_ARROW = 'ArrowRight',
  LEFT_ARROW = 'ArrowLeft'
}