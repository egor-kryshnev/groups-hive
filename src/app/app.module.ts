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
import { HiveComponent } from './hive/hive.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupsListComponent } from './groups/groups-list/groups-list.component';
import { GroupItemComponent } from './groups/group-item/group-item.component';
import { GroupNewModalComponent } from './groups/group-newModal/group-newModal.component';
import { PersonComponent } from './groups/group-newModal/person/person.component';
import { PersonGroupComponent } from './groups/group-newModal/person-group/person-group.component';
import { PeopleListComponent } from './groups/group-newModal/people-list/people-list.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PersonGroupService } from './groups/group-newModal/person-group/person-group.service';
import { GroupDetailComponent } from './groups/group-detail/group-detail.component';
import { GroupDetailService } from './groups/group-detail/group-detail.service';
import { ModalChangeAvatarGroupComponent } from './groups/group-detail/modal-change-avatar-group/modal-change-avatar-group.component';


@NgModule({
   declarations: [
      AppComponent,
      HiveComponent,
      GroupsComponent,
      HeaderComponent,
      GroupsListComponent,
      GroupItemComponent,
      GroupNewModalComponent,
      PersonComponent,
      PersonGroupComponent,
      PeopleListComponent,
      FilterPipe,
      FilterDontshowinstartPipe,
      GroupDetailComponent,
      PeoplegroupListComponent,
      ModalRemoveGroupComponent,
      ModalChangeAvatarGroupComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ModalModule.forRoot(),
      AngularFontAwesomeModule,
      TooltipModule.forRoot(),
      ScrollingModule
   ],
   providers: [
      BsModalRef,
      AuthService,
      PersonGroupService,
      GroupDetailService
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      GroupNewModalComponent,
      ModalRemoveGroupComponent,
      ModalChangeAvatarGroupComponent
   ]
})
export class AppModule { }
