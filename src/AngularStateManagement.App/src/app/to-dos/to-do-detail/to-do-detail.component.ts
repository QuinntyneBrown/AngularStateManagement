import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToDo } from '@api';
import { ToDoStore } from '@core/to-do.store';

@Component({
  selector: 'app-to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.scss']
})
export class ToDoDetailComponent  {

  public readonly form = new FormGroup({
    toDoId: new FormControl(null, [Validators.required]),
    description: new FormControl(null,[Validators.required]),
    status: new FormControl(null, [Validators.required])
  })
  constructor(
    private readonly _toDoStore: ToDoStore
  ) {

  }

  public save(toDo: ToDo) {
    this._toDoStore.create({ toDo })
    .subscribe();
  }
}
