
import { combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FollowerService } from './../services/follower.service';
import { Component, OnInit } from '@angular/core';
import {switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers: any;
  constructor(private service: FollowerService, private route: ActivatedRoute) { }

  ngOnInit() {
    combineLatest([
        this.route.paramMap,
        this.route.queryParamMap
      ])
      .pipe(switchMap(combine => {
        const id = combine[0].get('id');
        const page = combine[1].get('page');

        console.log(id, page);
        return this.service.getAll();
      })
    )
      .subscribe(followers => this.followers = followers);
  }
}
