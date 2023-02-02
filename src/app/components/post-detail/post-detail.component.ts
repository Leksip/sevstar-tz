import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, Subject,takeUntil} from 'rxjs';
import {PostService} from '../../services/post.service';
import {PostDetail} from '../../models/post-detail';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit, OnDestroy {
  postDetail: PostDetail;
  $destroy: Subject<void> = new Subject<void>();
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      takeUntil(this.$destroy)
    )
      .subscribe(id => this.postsService.getById(+id)
        .subscribe(post => {
          this.postDetail = post;
          this.isLoading = false;
          console.log(post);
        })
      );

  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
