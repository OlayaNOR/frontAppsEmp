import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Owner } from '../../models/Owner';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-list',
  templateUrl: './listowners.component.html',
  styleUrls: ['./listowners.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class OwnerListComponent implements OnInit {
  owners: Owner[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadOwners();
  }

  loadOwners(): void {
    this.userService.getAllOwners().subscribe({
      next: (data) => {
        this.owners = data;
      },
      error: (err) => {
        console.error('Error cargando propietarios:', err);
      }
    });
  }

  onLogOut():void{
    this.router.navigate(["/login"]);
  }
}
