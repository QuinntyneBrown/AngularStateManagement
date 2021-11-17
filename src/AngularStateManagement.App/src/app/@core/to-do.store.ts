import { Injectable } from "@angular/core";
import { ToDo, ToDoService } from "@api";
import { BehaviorSubject, Observable } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ToDoStore {

  private readonly _toDosSubject: BehaviorSubject<ToDo[]> = new BehaviorSubject([]);

  public toDos$ = this._toDosSubject.asObservable();

  constructor(
    private readonly _toDoService: ToDoService
  ) { }

  public refresh$(): Observable<ToDo[]> {
    return this._toDoService.get()
    .pipe(
      tap(toDos => this._toDosSubject.next(toDos)),
      switchMap(_ => this._toDosSubject.asObservable())
    );
  }

}
