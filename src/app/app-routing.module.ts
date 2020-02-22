import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './component/list/list.component';
import { CreateListComponent } from './component/create-list/create-list.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'create-list', component: CreateListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
