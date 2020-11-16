import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddContactComponent } from '../components/add-contact/add-contact.component';

@NgModule({
    imports: [ 
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
     ],
    declarations: [ AddContactComponent ],
    exports: [ AddContactComponent ]       // экспортируем компонент
})
export class AddContactModule { }