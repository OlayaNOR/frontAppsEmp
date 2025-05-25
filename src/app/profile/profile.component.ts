import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
import { Owner } from '../../models/Owner'; 
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [FormsModule]
})
export class ProfileComponent implements OnInit {
  owner!: Owner;
  
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.authService.getUserProfile(id).subscribe({
      next: (data) => {
        this.owner = data;
      },
      error: (err) => {
        console.error('Error fetching profile:', err);
      }
    });
  }

  onUpdateOwner(): void {
    this.userService.updateOwner(this.owner.id, this.owner).subscribe({
      next: (updatedOwner) => {
        console.log('Actualizado:', updatedOwner);
        alert('Usuario actualizado correctamente');
      },
      error: (err) => {
        console.error('Error al actualizar:', err);
        alert('Ocurrió un error al actualizar');
      }
    });
  }

  onDeleteOwner(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.authService.deleteAccount(id).subscribe({
        next: () => {
          alert('Usuario eliminado correctamente');
          this.router.navigate(['/login']);
        },
        error: err => {
          console.error('Error al eliminar el usuario:', err);
          alert('Ocurrió un error al eliminar el usuario');
        }
      });
    }
  }

  onLogOut():void{
    this.router.navigate(["/login"]);
  }

  onClickOwners():void{
    this.router.navigate(["/listowners"]);
  }
}