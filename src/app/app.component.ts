import { Component } from '@angular/core';
import { FavoriteChangedArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tweet = {
    body: 'This is supposed to be a tweet',
    likesCount: 10,
    isLiked: true
  }
  post = {
    title: 'Title',
    isFavorite: false
  }
}
