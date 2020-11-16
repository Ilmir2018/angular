import { Component, OnInit } from '@angular/core';
import { TableContent } from 'src/app/other_clases/table-content';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
})
export class UsersComponent implements OnInit {


  protected dataSource = [];

  constructor(private contentService: DataService) { }

  ngOnInit() {
    this.getAllContent();
  }

  getAllContent = () => {
    this.contentService.getContent().subscribe(data => {
      data.forEach(element => {
        let content = new TableContent();
        content.name = element.name;
        content.email = element.email;
        content.company_name = element.company_name;
        content.role = element.role;
        content.forecast = element.forecast;
        content.recent_activity = element.recent_activity;
        setTimeout(() => {
          this.dataSource.push(content);
        }, 200);
      });
    });
  }

}
