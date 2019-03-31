import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get(this.url)
    .subscribe(response => {
        this.posts = response;
    });
   }

   createPost(titleInput: HTMLInputElement) {
     const post = { title: titleInput.value };
     titleInput.value = '';
     this.http.post(this.url, JSON.stringify(post))
        .subscribe(response => {
// tslint:disable-next-line: no-string-literal
          post['id'] = response['id'];
          // splice(index, numberofObjects, objectToAdd)
          this.posts.splice(0, 0, post);
      });
   }

   updatePost(post) {
     this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
     .subscribe(response => {
       console.log(response);
     });
   }

   deletePost(post) {
     this.http.delete(this.url + '/' + post.id)
     .subscribe(response => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
     });
   }
}
