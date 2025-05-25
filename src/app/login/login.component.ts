import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';  
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {
  id: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  
  onSubmit(): void {
    this.authService.login(Number.parseInt(this.id), this.password).subscribe({
      next: (response) => {
        // Suponiendo que response tiene una propiedad "id"
        this.router.navigate(['/profile', response.id]);
      },
      error: (error) => {
        alert('Login failed. Please check your credentials.');
        console.error('Login error:', error);
      }
    });
  }

  signIn():void{
    this.router.navigate(['/signin']);
  }
    
}