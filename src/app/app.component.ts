import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-test';
  showFiller = false

  private menu = ['users', 'departments', 'add contact'];

  menuLink(str, i) {
    if (!str) return str;
    return (str[0] + str.slice(1))
      .split(" ").splice(0, i).join(" ");
  }

  nameOfTheLink(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
}
