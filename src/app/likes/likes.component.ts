import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent {
// tslint:disable-next-line: no-input-rename
  @Input('isLiked') isLiked : boolean;
// tslint:disable-next-line: no-input-rename
  @Input('likedCount') likedCount : number;

  onClick() {
    this.likedCount += (this.isLiked) ? -1 : 1;
    this.isLiked = !this.isLiked;
  }
}
