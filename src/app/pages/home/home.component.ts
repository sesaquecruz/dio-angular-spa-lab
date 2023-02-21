import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  titles: string[];
  users: User[] = [];

  formUser: FormGroup;

  constructor(private fb: FormBuilder) {
    this.titles = ['index', 'user'];

    this.users = [
      {
        photo: '../../assets/images/photo1.png',
        name: 'Tom',
        email: 'tom@mail.com',
        message: 'Hi everyone!',
      },
      {
        photo: '../../assets/images/photo2.png',
        name: 'Mark',
        email: 'mark@mail.com',
        message: 'Hi Tom, how are you?',
      }
    ];

    this.formUser = fb.group({
      photo: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  add() {
    if (!this.formUser.invalid) {
      const user = this.formUser.value;
      this.users = [...this.users, user];

      console.log(this.users);
    }

    console.log(this.formUser.value)
  }

  delete(index: number) {
    this.users = this.users.filter((_, i) => i !== index);
  }
}
