import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { ToDo, ToDoService } from "@api";
import { baseUrl } from "@core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { storeMixin } from "./store";

@Injectable({
  providedIn: "root"
})
export class ToDoStore extends storeMixin(ToDoService) {

  constructor(
    @Inject(baseUrl) _baseUrl: string,
    _client: HttpClient
  ) {
    super(_baseUrl, _client);
  }

  public get(): Observable<ToDo[]> {
    return super.from$(() => super.get(), ["TO_DOS"]);
  }

  public getById(options: { toDoId: string }): Observable<ToDo> {
    return this.from$(() => super.getById(options), [`TO_DO_${options.toDoId}`]);
  }

  public create(options: { toDo: ToDo }): Observable<{ toDo: ToDo }> {
    return super.create(options)
    .pipe(
      tap(_ => super.refresh("TO_DOS"))
    );
  }

  public update(options: { toDo: ToDo }): Observable<{ toDo: ToDo }> {
    return super.update(options)
    .pipe(
      tap(_ => super.refresh([`TO_DO_${options.toDo.toDoId}`,"TO_DOS"]))
    );
  }
}
