import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { InvoiceComponent } from './invoice.component';

const routes: Routes = [
    {
        path: "", component: InvoiceComponent,
    }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class InvoiceRoutingModule { }