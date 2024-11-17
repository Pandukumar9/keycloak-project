import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // {
  //   path: '',
  //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  //   canActivate: [roleGuard],
  //   data: { roles: ['farmer'] }
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  //   canActivate: [roleGuard],
  //   data: { roles: ['custamer'] }
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
