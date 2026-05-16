import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit() {
    const menuItems = document.querySelectorAll('.nav-item');
    menuItems.forEach((item) => {
      const link = item.querySelector('.nav-link');
      const treeview = item.querySelector('.nav-treeview');
      if (link && treeview) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const isOpen = item.classList.contains('menu-open');
          // Cerrar todos
          document.querySelectorAll('.nav-item.menu-open').forEach((el) => {
            el.classList.remove('menu-open');
          });
          // Abrir el actual si estaba cerrado
          if (!isOpen) {
            item.classList.add('menu-open');
          }
        });
      }
    });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/auth/login']);
  }
}