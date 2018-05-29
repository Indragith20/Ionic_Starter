import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NetworkPage } from '../network/network';
import { MessagingPage } from '../messaging/messaging';
import { NotificationsPage } from '../notifications/notifications';
import { JobsPage } from '../jobs/jobs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NetworkPage;
  tab3Root = MessagingPage;
  tab4Root = NotificationsPage;
  tab5Root = JobsPage;

  constructor() {

  }
}
