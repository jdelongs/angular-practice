import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: any;
<<<<<<< HEAD
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get(this.url)
=======
  constructor(private service: PostService) { }

   ngOnInit() {
    this.service.getAll()
>>>>>>> a4cf1349350f3db686a8239d961f9767c489d6ac
    .subscribe(response => {
        this.posts = response;
    });
  }

   createPost(inputTitle: HTMLInputElement) {
     const post = {title: inputTitle.value};
     this.posts.splice(0, 0, post);

     inputTitle.value = '';

     this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost['id'];
      },
      (error: Response) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInput){
            // this.form.setErrors(error.originalError);
        } else { throw error; }
      });
   }

<<<<<<< HEAD
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
=======
  updatePost(post) {
    this.service.update(post)
      .subscribe(
        response => {
          console.log(response);
      });
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
    .subscribe(
      null,
      (error: AppError) => {
        this.posts.splice(index, 0, post);
        if (error instanceof NotFoundError) {
          alert('this post has already been deleted');
        } else { throw error; }
    });
  }
>>>>>>> a4cf1349350f3db686a8239d961f9767c489d6ac
}
