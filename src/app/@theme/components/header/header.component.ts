import { Component, Input, OnInit } from '@angular/core';
var axios = require('axios');

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { LayoutService } from '../../../@core/data/layout.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { apiUrl, api_2_Url } from '../../../app.module';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';
  lastUpdatedTime = '';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserService,
    private analyticsService: AnalyticsService,
    private layoutService: LayoutService,
    private router: Router) {
  }

  ngOnInit() {

    axios.get(api_2_Url)
      .then(response => {
        console.log(response);
        this.lastUpdatedTime = response.data + ' IST';
      })

    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  newResource() {
    this.router.navigate(['/new'], { queryParams: {} });
  }

  manual() {
    this.router.navigate(['/manual'], { queryParams: {} });
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch(key) {
    console.log('header key', key);
    this.analyticsService.trackEvent('startSearch');
  }
}
