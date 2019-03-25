import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
// tslint:disable-next-line: no-input-rename
  @Input('isFavorite') isSelected: boolean;
// tslint:disable-next-line: no-output-rename
  @Output('change') change = new EventEmitter();

  onClick() {
    let test = 'garbage';
    this.isSelected = !this.isSelected;
// tslint:disable-next-line: max-line-length
    this.change.emit({ newValue: this.isSelected }); // used to raise or publish an event if you pass an argument and this argument will be available to all subscripers of this event
  }

}
export interface FavoriteChangedArgs {
  newValue: boolean;
}
