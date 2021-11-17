import { Component, OnInit } from '@angular/core';
import { ToDoService } from '@api/services/to-do.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent  {
  public vm$ = this._toDoService
  .get()
  .pipe(
    map(toDos => ({ toDos }))
  )
  constructor(
    private readonly _toDoService: ToDoService
  ) {

  }

}
