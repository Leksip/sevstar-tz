import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-commentaries',
  templateUrl: './commentaries.component.html',
  styleUrls: ['./commentaries.component.scss']
})
export class CommentariesComponent implements OnInit {
  @Input() level: number;
  @Input() comment;

  constructor() {
  }

  ngOnInit(): void {
    this.level++
  }

}
