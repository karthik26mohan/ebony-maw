import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  score = 0;
  constructor(private router: Router) {
    this.score = this.router.getCurrentNavigation()?.extras.state?.score;
  }

  ngOnInit(): void {
  }

}
