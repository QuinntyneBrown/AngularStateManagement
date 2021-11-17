import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToDo, ToDoService } from '@api';

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
    private readonly _toDoService: ToDoService
  ) {

  }

  public save(toDo: ToDo) {
    this._toDoService.create({ toDo })
    .subscribe();
  }
}
