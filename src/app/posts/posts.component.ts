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
export class PostsComponent implements OnInit {
  posts: any;
  constructor(private service: PostService) { }

   ngOnInit() {
    this.service.getAll()
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
}
