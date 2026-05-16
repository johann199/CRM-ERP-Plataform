import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Permiso {
  ver: boolean;
  crear: boolean;
  editar: boolean;
  eliminar: boolean;
}

interface Modulo {
  nombre: string;
  icono: string;
  permisos: Permiso;
}

interface Usuario {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-roles-form',
  imports: [RouterLink, FormsModule],
  templateUrl: './roles-form.html',
  styleUrl: './roles-form.css',
})
export class RolesForm implements OnInit {
  esEdicion = false;
  esRolBase = false;
  rolNombre = '';
  rolDescripcion = '';

  usuariosAsignados: Usuario[] = [
    { id: 1, nombre: 'Juan Pérez' },
    { id: 2, nombre: 'María García' },
  ];

  modulos: Modulo[] = [
    { nombre: 'Usuarios', icono: 'bi-people', permisos: { ver: false, crear: false, editar: false, eliminar: false } },
    { nombre: 'Roles y permisos', icono: 'bi-shield-lock', permisos: { ver: false, crear: false, editar: false, eliminar: false } },
    { nombre: 'Configuraciones', icono: 'bi-gear', permisos: { ver: false, crear: false, editar: false, eliminar: false } },
    { nombre: 'Clientes', icono: 'bi-person-lines-fill', permisos: { ver: false, crear: false, editar: false, eliminar: false } },
    { nombre: 'Productos', icono: 'bi-box-seam', permisos: { ver: false, crear: false, editar: false, eliminar: false } },
    { nombre: 'Proforma', icono: 'bi-file-earmark-text', permisos: { ver: false, crear: false, editar: false, eliminar: false } },
    { nombre: 'Comisiones', icono: 'bi-percent', permisos: { ver: false, crear: false, editar: false, eliminar: false } },
    { nombre: 'Caja', icono: 'bi-cash-stack', permisos: { ver: false, crear: false, editar: false, eliminar: false } },
    { nombre: 'Compras', icono: 'bi-cart', permisos: { ver: false, crear: false, editar: false, eliminar: false } },
    { nombre: 'Transporte', icono: 'bi-truck', permisos: { ver: false, crear: false, editar: false, eliminar: false } },
    { nombre: 'Conversión', icono: 'bi-arrow-left-right', permisos: { ver: false, crear: false, editar: false, eliminar: false } },
    { nombre: 'Despacho', icono: 'bi-send', permisos: { ver: false, crear: false, editar: false, eliminar: false } },
    { nombre: 'Kardex', icono: 'bi-journal-text', permisos: { ver: false, crear: false, editar: false, eliminar: false } },
    { nombre: 'Cronograma', icono: 'bi-calendar3', permisos: { ver: false, crear: false, editar: false, eliminar: false } },
    { nombre: 'Reportes', icono: 'bi-bar-chart-line', permisos: { ver: false, crear: false, editar: false, eliminar: false } },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esEdicion = true;
      this.cargarRol(Number(id));
    }
  }

  cargarRol(id: number) {
    // Simulación hasta que el backend esté listo
    const rolesBase = [1, 2, 3, 4, 5];
    this.esRolBase = rolesBase.includes(id);

    const roles: any = {
      1: { nombre: 'Gerente de Operaciones', descripcion: 'Acceso total a todas las sucursales y módulos' },
      2: { nombre: 'Administrador', descripcion: 'Acceso completo a su sucursal asignada' },
      3: { nombre: 'Vendedor', descripcion: 'Acceso a clientes, productos, proforma y comisiones' },
      4: { nombre: 'Cajero', descripcion: 'Acceso a caja y cronograma' },
      5: { nombre: 'Almacén', descripcion: 'Acceso a compras, kardex, despacho, conversión y transporte' },
    };

    if (roles[id]) {
      this.rolNombre = roles[id].nombre;
      this.rolDescripcion = roles[id].descripcion;
    }

    // Simular permisos según el rol
    if (id === 1) this.marcarTodo(true);
    if (id === 3) {
      ['Clientes', 'Productos', 'Proforma', 'Comisiones'].forEach((m) => {
        const mod = this.modulos.find((x) => x.nombre === m);
        if (mod) { mod.permisos = { ver: true, crear: true, editar: true, eliminar: false }; }
      });
    }
    if (id === 4) {
      ['Caja', 'Cronograma'].forEach((m) => {
        const mod = this.modulos.find((x) => x.nombre === m);
        if (mod) { mod.permisos = { ver: true, crear: true, editar: true, eliminar: false }; }
      });
    }
    if (id === 5) {
      ['Compras', 'Kardex', 'Despacho', 'Conversión', 'Transporte'].forEach((m) => {
        const mod = this.modulos.find((x) => x.nombre === m);
        if (mod) { mod.permisos = { ver: true, crear: true, editar: true, eliminar: false }; }
      });
    }
  }

  onVerChange(modulo: Modulo) {
    if (!modulo.permisos.ver) {
      modulo.permisos.crear = false;
      modulo.permisos.editar = false;
      modulo.permisos.eliminar = false;
    }
  }

  marcarTodo(valor: boolean) {
    this.modulos.forEach((m) => {
      m.permisos = { ver: valor, crear: valor, editar: valor, eliminar: valor };
    });
  }

  quitarUsuario(id: number) {
    this.usuariosAsignados = this.usuariosAsignados.filter((u) => u.id !== id);
  }

  agregarUsuario() {
    // Se conectará al backend cuando esté listo
    alert('Funcionalidad disponible cuando el backend esté listo.');
  }

  guardar() {
    if (!this.rolNombre.trim()) {
      alert('El nombre del rol es obligatorio.');
      return;
    }
    // Se conectará al backend cuando esté listo
    alert('Guardado correctamente (simulación).');
    this.router.navigate(['/dashboard/roles']);
  }
}