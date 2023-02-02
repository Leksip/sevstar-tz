import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {PostDetail} from '../models/post-detail';
import {queryParam} from "../models/query-param";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  API_URL = environment.API_URL;
  url = 'search_by_date?tags=front_page';

  constructor(
    private http: HttpClient
  ) {
  }

  getPosts(queryParams?: queryParam[]): Observable<any> {
    let qp = '';
    queryParams.forEach((element, index) => {
      if (index > 0) {
        qp += '&' + element.name + '=' + element.value;
      } else {
        qp += '?' + element.name + '=' + element.value;
      }
    });

    return this.http.get<any>(this.API_URL + 'search_by_date' + qp);

  }

  getById(id: number): Observable<PostDetail> {
    return this.http.get<PostDetail>(`http://hn.algolia.com/api/v1/items/${id}`);
  }
}
