import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsListComponent} from './components/posts-list/posts-list.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {LayoutComponent} from './components/layout/layout.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', component: PostsListComponent},
      {path: 'post/:id', component: PostDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
