import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeEnseignantComponent } from './home-enseignant/home-enseignant.component';
import { RouterModule, Routes } from '@angular/router';
import { NavEnseignantComponent } from './nav-enseignant/nav-enseignant.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';


import { NgChartsModule } from 'ng2-charts';


import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
// import { DialogComponent } from './dialog/dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';

import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { DatePipe } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardEnseignantComponent } from './dashboard-enseignant/dashboard-enseignant.component';
import { ProfilEnseignantComponent } from './profil-enseignant/profil-enseignant.component';
import { authGuard } from './auth/auth.guard';
import { DetailCourEnseignantComponent } from './detail-cour-enseignant/detail-cour-enseignant.component';
import { ClasseEnseignantComponent } from './classe-enseignant/classe-enseignant.component';
import { FaireAppelComponent } from './faire-appel/faire-appel.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DashboardElementComponent } from './dashboard-element/dashboard-element.component';
import { NavEtuComponent } from './nav-etu/nav-etu.component';
import { ProfilEtudiantComponent } from './profil-etudiant/profil-etudiant.component';
import { ConvoEtudiantComponent } from './convo-etudiant/convo-etudiant.component';


const appRoutes:Routes=[
  //{path:'',component:LoginComponent},
  {path:'',component:HomeEnseignantComponent,canActivate: [authGuard]},
  {path:'nav',component:NavComponent,canActivate: [authGuard]},
  {path:'dashboard-enseignant',component:DashboardEnseignantComponent},
  {path:'profil-enseignant',component:ProfilEnseignantComponent},
  {path:'classe-enseignant',component:ClasseEnseignantComponent},
  {path:'faire-appel/:id',component:FaireAppelComponent},
  {path:'dashboard-etudiant',component:DashboardElementComponent,canActivate: [authGuard]},
  {path:'convo-etudiant',component:ConvoEtudiantComponent,canActivate: [authGuard]},
  {path:'profil-etudiant',component:ProfilEtudiantComponent,canActivate: [authGuard]},
 
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeEnseignantComponent,
    NavEnseignantComponent,
    NavComponent,
    DashboardEnseignantComponent,
    ProfilEnseignantComponent,
    DetailCourEnseignantComponent,
    ClasseEnseignantComponent,
    FaireAppelComponent,
    DashboardElementComponent,
    NavEtuComponent,
    ProfilEtudiantComponent,
    ConvoEtudiantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule,
    NgChartsModule,
    LayoutModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatChipsModule,
    MatSnackBarModule
  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 