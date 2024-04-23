import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SelectedComponent } from './components/project/selected/selected.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { ListUsersComponent } from './components/dashboard/list-users/list-users.component';
import { ResetComponent } from './components/dashboard/reset/reset.component';
import { ToolsComponent } from './components/dashboard/tools/tools.component';
import { ReportsComponent } from './components/dashboard/reports/reports.component';
import { SearchComponent } from './components/dashboard/search/search.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component:RegisterComponent},
  { path: 'selected', component: SelectedComponent},
  { path: 'dashboard', component: AdminComponent},
  /*admin*/
  { path: 'usuarios', component: ListUsersComponent},
  { path: 'reseteo', component: ResetComponent },
  { path: 'herramientas', component: ToolsComponent },
  { path: 'reportes', component: ReportsComponent },
  { path: 'buscar', component: SearchComponent},

  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
