import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Rol {
  id: number;
  nombre: string;
  tipo: 'base' | 'personalizado';
  usuarios: number;
  descripcion: string;
  color: string;
  icono: string;
}

@Component({
  selector: 'app-roles-list',
  imports: [RouterLink],
  templateUrl: './roles-list.html',
  styleUrl: './roles-list.css',
})
export class RolesList {
  roles: Rol[] = [
    {
      id: 1,
      nombre: 'Gerente de Operaciones',
      tipo: 'base',
      usuarios: 1,
      descripcion: 'Acceso total a todas las sucursales y módulos',
      color: '#6f42c1',
      icono: 'bi-star-fill',
    },
    {
      id: 2,
      nombre: 'Administrador',
      tipo: 'base',
      usuarios: 2,
      descripcion: 'Acceso completo a su sucursal asignada',
      color: '#0d6efd',
      icono: 'bi-shield-fill',
    },
    {
      id: 3,
      nombre: 'Vendedor',
      tipo: 'base',
      usuarios: 5,
      descripcion: 'Acceso a clientes, productos, proforma y comisiones',
      color: '#198754',
      icono: 'bi-person-fill',
    },
    {
      id: 4,
      nombre: 'Cajero',
      tipo: 'base',
      usuarios: 3,
      descripcion: 'Acceso a caja y cronograma',
      color: '#fd7e14',
      icono: 'bi-cash-coin',
    },
    {
      id: 5,
      nombre: 'Almacén',
      tipo: 'base',
      usuarios: 2,
      descripcion: 'Acceso a compras, kardex, despacho, conversión y transporte',
      color: '#20c997',
      icono: 'bi-box-fill',
    },
  ];

  eliminarRol(id: number) {
    if (confirm('¿Estás seguro de eliminar este rol?')) {
      this.roles = this.roles.filter((r) => r.id !== id);
    }
  }
}