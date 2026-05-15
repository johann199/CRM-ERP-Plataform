import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  loading = false;
  errorMessage = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Completá todos los campos.';
      return;
    }

    this.loading = true;

    // Simulación hasta que el backend esté listo
    setTimeout(() => {
      this.loading = false;
      // this.router.navigate(['/dashboard']);
      this.errorMessage = 'Backend no disponible aún.';
    }, 1000);
  }
}