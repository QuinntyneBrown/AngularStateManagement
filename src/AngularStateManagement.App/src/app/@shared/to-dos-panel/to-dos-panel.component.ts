import { Component } from '@angular/core';
import { ToDoStore } from '@core/to-do.store';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-to-dos-panel',
  templateUrl: './to-dos-panel.component.html',
  styleUrls: ['./to-dos-panel.component.scss']
})
export class ToDosPanelComponent {

  public vm$ = this._toDoStore
  .get()
  .pipe(
    map(toDos => ({ toDos }))
  )
  constructor(
    private readonly _toDoStore: ToDoStore
  ) {

  }

}
