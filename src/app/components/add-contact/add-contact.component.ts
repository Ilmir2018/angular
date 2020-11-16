import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/other_clases/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.less']
})
export class AddContactComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: DataService) { }
  roles = ['Admin', 'Operator', 'Manager'];
  users: User[] = [];
  days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  addContact: FormGroup;

  ngOnInit() {
    this.initForm();
  }


  initForm(): void {
    this.addContact = this.fb.group({
      firstName: ['',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(3)
        ]
      ],
      lastName: ['',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(3)
        ]
      ],
      role: ['',
        [
          Validators.required,
        ]],
      schedule: ['',
        [
          Validators.required,
        ]],
      isActive: ['',
        [
          Validators.required,
        ]],
    });
  }

  submit() {
    const user: User = this.addContact.value;
    this.service.addContact(user).subscribe(data => {
      this.users = data;
      console.log(this.users);
      this.clear();
    });
  }

  clear() {
    this.addContact.reset();
  }

}
