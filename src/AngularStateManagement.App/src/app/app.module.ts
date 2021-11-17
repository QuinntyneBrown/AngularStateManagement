import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { baseUrl } from '@core';
import { ToDosPanelModule } from '@shared/to-dos-panel/to-dos-panel.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToDosPanelModule
  ],
  providers: [
    {
      provide: baseUrl,
      useValue: "https://localhost:5001/"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
