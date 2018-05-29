import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PostPopoverComponent } from './post-popover/post-popover';
import { PostAttachmentComponent } from './post-attachment/post-attachment';
import { DemoAvatarComponent } from './demo-avatar/demo-avatar';
@NgModule({
	declarations: [PostPopoverComponent,
    PostAttachmentComponent,
    DemoAvatarComponent],
	imports: [IonicModule],
	entryComponents: [
		PostPopoverComponent,
		PostAttachmentComponent,
		DemoAvatarComponent
	],
	exports: [PostPopoverComponent,
    PostAttachmentComponent,
    DemoAvatarComponent]
})
export class ComponentsModule {}
