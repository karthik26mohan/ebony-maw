import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private el: ElementRef,
    private router: Router) { }

  coin: HTMLElement | undefined;
  coinLocation: string = '';
  score = 0;

  ngOnInit(): void {
    this.coin = this.el.nativeElement.querySelector(".coin");
    this.placeCoin();
  }

  placeCoin() {
    const pos = this.randomEnum(COIN_LOCATION);
    // console.log(pos);
    switch(pos) {
      case 0:
        this.coinLocation = 'up';
        this.coin?.classList.remove('down', 'left', 'right');
        this.coin?.classList.add('up');
        break;
      case 1:
        this.coinLocation = 'down';
        this.coin?.classList.remove('up', 'left', 'right');
        this.coin?.classList.add('down');
        break;
      case 2:
        this.coinLocation = 'left';
        this.coin?.classList.remove('down', 'up', 'right');
        this.coin?.classList.add('left');
        break;
      case 3:
        this.coinLocation = 'right';
        this.coin?.classList.remove('down', 'left', 'up');
        this.coin?.classList.add('right');
        break;
    }
  }
  
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    let red = this.el.nativeElement.querySelector("#red") as HTMLElement;
    switch(event.key) {
      case KEY_CODE.RIGHT_ARROW: {
        if(this.wasCorrectMove(KEY_CODE.RIGHT_ARROW)) {
          this.score++;
          red.classList.add('move-right-to-left');
          setTimeout(() => {
            red.classList.remove('move-right-to-left');
          }, 50);
          this.placeCoin();
        } else {
          this.router.navigateByUrl('/score', { state: { score: this.score }});
        }
        break;
      }
      case KEY_CODE.LEFT_ARROW: {
        if(this.wasCorrectMove(KEY_CODE.LEFT_ARROW)) {
          this.score++;
          red.classList.add('move-left-to-right');
          setTimeout(() => {
            red.classList.remove('move-left-to-right');
          }, 50);
          this.placeCoin();
        }else {
          this.router.navigateByUrl('/score', { state: { score: this.score }});
        }
        break;
      }
      case KEY_CODE.UP_ARROW: {
        if(this.wasCorrectMove(KEY_CODE.UP_ARROW)) {
          this.score++;
          red.classList.add('move-up-to-down');
          setTimeout(() => {
            red.classList.remove('move-up-to-down');
          }, 50);
          this.placeCoin();
        }else {
          this.router.navigateByUrl('/score', { state: { score: this.score }});
        }
        break;
      }
      case KEY_CODE.DOWN_ARROW: {
        if(this.wasCorrectMove(KEY_CODE.DOWN_ARROW)) {
          this.score++;
          red.classList.add('move-down-to-up');
          setTimeout(() => {
            red.classList.remove('move-down-to-up');
          }, 50);
          this.placeCoin();
        }else {
          this.router.navigateByUrl('/score', { state: { score: this.score }});
        }
        break;
      }
    }
  }

  wasCorrectMove(key: string) {
    return key.toLowerCase().indexOf(this.coinLocation) !== -1;
  }

  randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(anEnum)
      .map(n => Number.parseInt(n))
      .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    const randomEnumValue = enumValues[randomIndex]
    return randomEnumValue;
  }
}

export enum KEY_CODE {
  UP_ARROW = 'ArrowUp',
  DOWN_ARROW = 'ArrowDown',
  RIGHT_ARROW = 'ArrowRight',
  LEFT_ARROW = 'ArrowLeft'
};

export enum COIN_LOCATION {
  Up,
  DOWN,
  LEFT,
  RIGHT
};