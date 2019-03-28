import { FollowerService } from './../services/follower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers: any;
  constructor(private service: FollowerService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(response => this.followers = response);
  }

}
