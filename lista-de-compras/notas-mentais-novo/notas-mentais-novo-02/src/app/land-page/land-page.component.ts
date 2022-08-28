/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shared } from './../util/shared';
import { Subscription } from 'rxjs';
import { WebStorageUtil } from '../util/web-storage-util';
import { LoginService } from './../services/login.service';
import { Constants } from '../util/constants';
import { User } from '../model/user';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {
  imageURL: string = '/assets/resources/images/anotacao.png';
  loggedIn = false;
  subscription!: Subscription;
  user!: User;

  constructor(private router: Router, private loginService: LoginService) {
    this.subscription = this.loginService.asObservable().subscribe((data) => {
      this.loggedIn = data;
      console.log('observer - land-page');
    });
  }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.loggedIn = WebStorageUtil.get(Constants.LOGGED_IN_KEY);
    console.log('init - land-page');
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY) as User;
  }

  getBackgroundImage() {
    return {
      'background-image':
        'linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .9)), url(' +
        this.imageURL +
        ')',
    };
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('destroy - land-page');
  }
}
