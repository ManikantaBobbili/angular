import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ViewBookComponent } from './components/view-book/view-book.component';

const routes: Routes = [
 //declare path here
 {path:'add-book' , component:AddBookComponent},
 {path:'view-book' , component:ViewBookComponent},
 {path:'' , redirectTo:'/add-book' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
