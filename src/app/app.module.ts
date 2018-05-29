import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Keyboard } from '@ionic-native/keyboard';
import { ImagePicker } from '@ionic-native/image-picker';

import { ComponentsModule } from '../components/components.module';
import { ElasticModule } from 'ng-elastic';
import { DirectivesModule } from '../directives/directives.module';

import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MenuPage } from '../pages/menu/menu';
import { HomePage } from '../pages/home/home';
import { PostPage } from '../pages/post/post';
import { NewPostPage } from '../pages/new-post/new-post';
import { NetworkPage } from '../pages/network/network';
import { MessagingPage } from '../pages/messaging/messaging';
import { NotificationsPage } from '../pages/notifications/notifications';
import { JobsPage } from '../pages/jobs/jobs';
import { SearchPage } from '../pages/search/search';
import { ConnectionsPage } from '../pages/connections/connections';
import { MessagePage } from '../pages/message/message';
import { NlbrPipe } from '../pages/message/nlbr.pipe';
import { SettingsPage } from '../pages/settings/settings';
import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    MenuPage,
    HomePage,
    PostPage,
    NewPostPage,
    SearchPage,
    NetworkPage,
    MessagingPage,
    NotificationsPage,
    JobsPage,
    ConnectionsPage,
    MessagePage,
    NlbrPipe,
    SettingsPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    DirectivesModule,
    ElasticModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',// TODO: to have same iOS look for all platforms
      backButtonText: '',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    MenuPage,
    HomePage,
    PostPage,
    NewPostPage,
    SearchPage,
    NetworkPage,
    MessagingPage,
    NotificationsPage,
    JobsPage,
    ConnectionsPage,
    MessagePage,
    SettingsPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
