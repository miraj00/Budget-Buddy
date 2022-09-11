import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpensesListComponent } from './components/expense-list/expense-list.component';
import { TotalExpensesComponent } from './components/total-expenses/total-expenses.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseFormComponent,
    ExpensesListComponent,
    TotalExpensesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
