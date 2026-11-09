import { Routes } from '@angular/router';
import { EmpleadoListaComponent } from './components/empleado-lista/empleado-lista.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'empleados', pathMatch: 'full' },
  { path: 'empleados', component: EmpleadoListaComponent },
  { path: 'nuevo-empleado', component: EmpleadoFormComponent }
];
