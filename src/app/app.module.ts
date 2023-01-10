import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import {
  registerCellType,
  NumericCellType,
} from 'handsontable/cellTypes';

import {
  registerPlugin,
  UndoRedo,
} from 'handsontable/plugins';

// register Handsontable's modules
registerAllModules();
registerCellType(NumericCellType);
registerPlugin(UndoRedo);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HotTableModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
