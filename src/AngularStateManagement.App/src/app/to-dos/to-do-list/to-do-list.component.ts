import { Component } from '@angular/core';
import { ToDoStore } from '@core/to-do.store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent  {
  public vm$ = this._toDoStore
  .get()
  .pipe(
    map(toDos => ({ toDos }))
  )
  constructor(
    private readonly _toDoStore: ToDoStore
  ) { }

}
