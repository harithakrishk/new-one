import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycmComponent } from './mycm/mycm.component';
import { GrdnComponent } from './grdn/grdn.component';
import { NewComponent } from './new/new.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    MycmComponent,
    GrdnComponent,
    NewComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})

export class AppModule { }

