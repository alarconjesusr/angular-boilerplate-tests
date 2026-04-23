import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable()
export class PostService {
  httpClient = inject(HttpClient);
  
  getPosts(): Observable<Post[]> {    
    return this.httpClient.get<Post[]>('https://my-json-server.typicode.com/typicode/demo/posts');
  }
}
