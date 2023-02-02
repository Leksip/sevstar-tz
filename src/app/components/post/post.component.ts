import {Component, Input, OnInit} from '@angular/core';
import {Hit} from '../../models/Hit';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Hit;

  constructor() {
  }

  ngOnInit(): void {
  }

}
