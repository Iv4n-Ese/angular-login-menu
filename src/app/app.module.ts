import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SelectedComponent } from './components/project/selected/selected.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { ListUsersComponent } from './components/dashboard/list-users/list-users.component';
import { ResetComponent } from './components/dashboard/reset/reset.component';
import { ToolsComponent } from './components/dashboard/tools/tools.component';
import { ReportsComponent } from './components/dashboard/reports/reports.component';
import { SearchComponent } from './components/dashboard/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SelectedComponent,
    AdminComponent,
    ListUsersComponent,
    ResetComponent,
    ToolsComponent,
    ReportsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
