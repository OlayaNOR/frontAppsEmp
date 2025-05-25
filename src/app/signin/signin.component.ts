import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone:true,
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  imports: [FormsModule]
})
export class SigninComponent {
  user = {
    id: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmation: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  registerUser() {
    if (this.user.password !== this.user.confirmation) {
      alert("Passwords don't match!");
      return;
    }

    this.userService.registerUser(this.user).subscribe({
      next: () => {
        alert("User created successfully");
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        alert("Error creating user. Please try again.");
      }
    });
  }
}