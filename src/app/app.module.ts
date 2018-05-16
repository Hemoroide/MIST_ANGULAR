import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule, MatToolbarModule, MatPaginator, MatPaginatorModule, MatMenuModule, MatIconModule, MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { AccordeonRechercheComponent } from './accordeon-recherche/accordeon-recherche.component';
import { AffichageRechercheComponent } from './affichage-recherche/affichage-recherche.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProfilComponent } from './profil/profil.component';

import { HotlistComponent } from './hotlist/hotlist.component';
import { GestionAffaireComponent } from './gestion-affaire/gestion-affaire.component';
import { SuspectFormComponent } from './suspect-form/suspect-form.component';
import { ArmeFormComponent } from './arme-form/arme-form.component';
import { VehiculeFormComponent } from './vehicule-form/vehicule-form.component';
import { AffaireFormComponent } from './affaire-form/affaire-form.component';
import { FormControl, FormGroup, FormBuilder, FormsModule } from '@angular/forms';

import { ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { Page404Component } from './page-404/page-404.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { ModifAffaireComponent } from './modif-affaire/modif-affaire.component';

import { ProfilServiceService } from './profil-service.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

import { CommonModule } from '@angular/common';
import { GestionViewComponent } from './gestion-view/gestion-view.component';

import { AjoutArmeComponent } from './ajout-arme/ajout-arme.component';
import { ArmesService } from './armes.service';
import { ListeArmesComponent } from './liste-armes/liste-armes.component';
import { SuppressionArmeComponent } from './suppression-arme/suppression-arme.component';
import { ModifArmeComponent } from './modif-arme/modif-arme.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AccordeonRechercheComponent,
    AffichageRechercheComponent,
    IndexComponent,
    ProfilComponent,
    HotlistComponent,
    GestionAffaireComponent,
    SuspectFormComponent,
    ArmeFormComponent,
    VehiculeFormComponent,
    AffaireFormComponent,
    Page404Component,
    ModifAffaireComponent,
    
    AuthComponent,
    GestionViewComponent,
    AjoutArmeComponent,
    ListeArmesComponent,
    SuppressionArmeComponent,
    ModifArmeComponent,
    ],

  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    CommonModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    
  ],
  exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule],

  providers: [ProfilServiceService, AuthService, AuthGuardService, ArmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule { }
