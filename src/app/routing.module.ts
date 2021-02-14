import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'; // CLI imports router
import { OtherComponent } from './components/other.component';

const routes: Routes = [
    // {
    //     path: "", redirectTo: "home", pathMatch: "full"
    // },
    {
        // path: "home", component: HomeComponent
        path: "home",
        loadChildren: () => import('./modules/home/home/home.module').then(m => m.HomeModule)
    },
    {
        path: "invoice",
        loadChildren: () => import('./modules/invoice/invoice/invoice.module').then(m => m.InvoiceModule)
    },
    {
        path: "other", component: OtherComponent
    },

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }