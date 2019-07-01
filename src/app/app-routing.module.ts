import { HiveComponent } from './hive/hive.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  { path: '', component: GroupsComponent },
  { path: 'hive', component: HiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
