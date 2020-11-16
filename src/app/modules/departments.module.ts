import { NgModule }      from '@angular/core';
import { DepartmentsComponent } from '../components/departments/departments.component';

@NgModule({
    imports:      [ ],
    declarations: [ DepartmentsComponent ],
    exports: [ DepartmentsComponent ]       // экспортируем компонент
})
export class DepartmentsModule { }