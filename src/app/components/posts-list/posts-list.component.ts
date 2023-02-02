import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Subject, takeUntil} from 'rxjs';
import {Hit} from '../../models/Hit';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {
  hits: Hit[];
  page = 0;
  nbPages = 0;
  isShow = true;
  $destroy: Subject<void> = new Subject<void>();

  constructor(
    private postsService: PostService
  ) {
  }

  ngOnInit(): void {
      this.getPosts()
  }

  showMore() {
    this.page++;
    this.isShow = !Boolean(this.page + 1 === this.nbPages)
    this.postsService.getPosts([
      {
        name: 'tags',
        value: 'front_page'
      },
      {
        name: 'page',
        value: this.page
      }
    ]).pipe(
      takeUntil(this.$destroy)
    ).subscribe(posts => {
        this.hits = [...this.hits, ...posts.hits];
      }
    );
  }

  getPosts(){
    this.postsService.getPosts([
      {
        name: 'tags',
        value: 'front_page'
      },
      {
        name: 'page',
        value: this.page
      }
    ]).pipe(
      takeUntil(this.$destroy)
    ).subscribe(posts => {
        this.hits = posts.hits;
        this.nbPages = posts.nbPages
      console.log(posts.hits)
      }
    );
  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
