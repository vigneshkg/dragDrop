
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyModuleModule } from './my-module.module'


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { TableComponent } from './my-table/my-table.component';
import { MyBoxComponent } from './my-box/my-box.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LayoutComponent,
    TableComponent,
    MyBoxComponent,
    BasicInfoComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

