import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [{ path: "navbar", component:NavbarComponent }, 
{ path: "", component:HomeComponent },
 { path: "search", component:SearchComponent },
 { path: "about", component:AboutComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
