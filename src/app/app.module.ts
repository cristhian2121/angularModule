import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { OtherComponent } from './components/other.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
    // HomeModule,
    // InvoiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
