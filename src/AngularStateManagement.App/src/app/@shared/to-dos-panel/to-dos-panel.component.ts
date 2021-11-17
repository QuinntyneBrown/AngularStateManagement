import { Component, OnInit } from '@angular/core';
import { ToDoService } from '@api';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-to-dos-panel',
  templateUrl: './to-dos-panel.component.html',
  styleUrls: ['./to-dos-panel.component.scss']
})
export class ToDosPanelComponent {

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
