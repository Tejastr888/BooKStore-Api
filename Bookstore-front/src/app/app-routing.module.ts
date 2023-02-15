import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  { path:'',component:BookListComponent},
  {path:'book-list',component:BookListComponent},
  {path:'book-form',component:BookFormComponent},
  {path:'book-detail/:bookId',component:BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
