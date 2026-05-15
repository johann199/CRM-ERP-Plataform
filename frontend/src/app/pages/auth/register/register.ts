import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';
  acceptTerms = false;
  loading = false;
  errorMessage = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.errorMessage = '';

    if (!this.firstName || !this.lastName || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Completá todos los campos.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    if (!this.acceptTerms) {
      this.errorMessage = 'Debés aceptar los términos y condiciones.';
      return;
    }

    this.loading = true;

    // Simulación hasta que el backend esté listo
    setTimeout(() => {
      this.loading = false;
      // this.router.navigate(['/auth/login']);
      this.errorMessage = 'Backend no disponible aún.';
    }, 1000);
  }
}