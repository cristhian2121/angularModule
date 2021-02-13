import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './modules/home/home/home.component';
import { InvoiceComponent } from './modules/invoice/invoice/invoice.component';

const routes: Routes = [
    {
        path: "", redirectTo: "home"
    },
    {
        path: "home", component: HomeComponent
    },
    {
        path: "invoice", component: InvoiceComponent
    }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }