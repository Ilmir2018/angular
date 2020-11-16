import { HttpClientModule } from '@angular/common/http';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RowComponent } from '../components/users/row/row.component';
import { UsersComponent } from '../components/users/users.component';

@NgModule({
    imports:      [ BrowserAnimationsModule, HttpClientModule ],
    declarations: [ UsersComponent, RowComponent ],
    exports: [ UsersComponent ]       // экспортируем компонент
})
export class UserModule { }