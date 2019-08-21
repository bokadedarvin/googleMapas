import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss'],
})
export class CommonLayoutComponent implements OnInit {

  constructor() { }
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Dashboard',
      url: '/user-dashboard',
      icon: 'speedometer'
    },
    {
      title: 'Places',
      url: '/places',
      icon: 'navigate'
    },
    {
      title: 'User History',
      url: '/user-history',
      icon: 'navigate'
    },
    // {
    //   title: 'Route Create',
    //   url: '/route-create',
    //   icon: 'navigate'
    // },
    // {
    //   title: 'Route View',
    //   url: '/route-view',
    //   icon: 'eye'
    // },
    {
      title: 'Log-Out',
      url: '/login',
      icon: 'log-out'
    }
  ];
  ngOnInit() {}

}
