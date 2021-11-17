import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoResolverService } from '@core/to-do-resolver.service';
import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';
import { ToDosComponent } from './to-dos.component';

const routes: Routes = [
  {
    path: '',
    component: ToDosComponent,
    resolve: { toDos: ToDoResolverService },
    children: [
      { path: '', redirectTo:'create', pathMatch: 'full' },
      { path: 'create', component: ToDoDetailComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDosRoutingModule { }
