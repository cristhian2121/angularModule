import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { OtherComponent } from './components/other.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

// modules
import { HomeModule } from './modules/home/home/home.module';
import { InvoiceModule } from './modules/invoice/invoice/invoice.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HomeModule,
    // InvoiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
