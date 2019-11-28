import { ModalChangeAvatarPersonComponent } from './groups/group-detail/peoplegroup-list/modal-change-avatar-person/modal-change-avatar-person.component';
import { ModalMailSenderComponent } from './groups/group-detail/modal-mail-sender/modal-mail-sender.component';
import { ModalChangeDescriptionComponent } from './groups/group-detail/modal-change-description/modal-change-description.component';
import { GetipService } from './getip.service';
import { ModalRemoveGroupComponent } from './groups/group-detail/modal-remove-group/modal-remove-group.component';
import { PeoplegroupListComponent } from './groups/group-detail/peoplegroup-list/peoplegroup-list.component';
import { FilterDontshowinstartPipe } from './groups/filter-dontshowinstart.pipe';
import { FilterPipe } from './groups/filter.pipe';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './core/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupsListComponent } from './groups/groups-list/groups-list.component';
import { GroupItemComponent } from './groups/group-item/group-item.component';
import { GroupNewModalComponent } from './groups/group-newModal/group-newModal.component';
import { PersonComponent } from './groups/group-newModal/person/person.component';
import { PersonGroupComponent } from './groups/group-newModal/person-group/person-group.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PersonGroupService } from './groups/group-newModal/person-group/person-group.service';
import { GroupDetailComponent } from './groups/group-detail/group-detail.component';
import { GroupDetailService } from './groups/group-detail/group-detail.service';
import { ModalChangeAvatarGroupComponent } from './groups/group-detail/modal-change-avatar-group/modal-change-avatar-group.component';
import { SharedModule } from './shared/shared.module';
import { DropdownDirective } from './shared/dropdown.directive';
import { ModalChangeAvatarAccountComponent } from './core/header/modal-change-avatar-account/modal-change-avatar-account.component';
import { FooterComponent } from './core/footer/footer.component';
import { ModalLeaveGroupComponent } from './groups/group-detail/modal-leave-group/modal-leave-group.component';
import { ModalRemoveUserComponent } from './groups/group-detail/peoplegroup-list/modal-remove-user/modal-remove-user.component';


@NgModule({
   declarations: [
      AppComponent,
      GroupsComponent,
      HeaderComponent,
      FooterComponent,
      GroupsListComponent,
      GroupItemComponent,
      GroupNewModalComponent,
      PersonComponent,
      PersonGroupComponent,
      FilterPipe,
      FilterDontshowinstartPipe,
      GroupDetailComponent,
      PeoplegroupListComponent,
      ModalRemoveGroupComponent,
      ModalLeaveGroupComponent,
      ModalChangeAvatarGroupComponent,
      ModalChangeDescriptionComponent,
      ModalMailSenderComponent,
      ModalChangeAvatarPersonComponent,
      ModalChangeAvatarAccountComponent,
      ModalRemoveUserComponent
      // DropdownDirective
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      SharedModule,
      ModalModule.forRoot(),
      AngularFontAwesomeModule,
      TooltipModule.forRoot(),
      ScrollingModule
      // DropdownDirective
   ],
   providers: [
      BsModalRef,
      AuthService,
      PersonGroupService,
      GroupDetailService,
      GetipService
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      GroupNewModalComponent,
      ModalRemoveGroupComponent,
      ModalLeaveGroupComponent,
      ModalChangeAvatarGroupComponent,
      ModalChangeDescriptionComponent,
      ModalMailSenderComponent,
      ModalChangeAvatarPersonComponent,
      ModalChangeAvatarAccountComponent,
      ModalRemoveUserComponent
   ]
})
export class AppModule { }
