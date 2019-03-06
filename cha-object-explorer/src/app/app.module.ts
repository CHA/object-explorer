import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObjectExplorerComponent } from './object-explorer.component';
import { CellComponent } from './cell.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    ObjectExplorerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
