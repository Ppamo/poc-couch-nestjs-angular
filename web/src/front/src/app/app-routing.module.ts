import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventsComponent } from './components/add-events/add-events.component';
import { ListEventsComponent } from './components/list-events/list-events.component';
import { UpdateEventsComponent } from './components/update-events/update-events.component';
import { DeleteEventsComponent } from './components/delete-events/delete-events.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'event/list'},
  {path: 'event/list', component: ListEventsComponent },
  {path: 'event/add', component: AddEventsComponent },
  {path: 'event/update/:id', component: UpdateEventsComponent },
  {path: 'event/delete/:id/:rev', component: DeleteEventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
