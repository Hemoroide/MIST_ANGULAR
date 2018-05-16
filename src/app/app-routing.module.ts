import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordeonRechercheComponent } from './accordeon-recherche/accordeon-recherche.component';
import { AffichageRechercheComponent } from './affichage-recherche/affichage-recherche.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { ProfilComponent} from './profil/profil.component';
import { HotlistComponent} from './hotlist/hotlist.component';
import { GestionAffaireComponent } from './gestion-affaire/gestion-affaire.component';
import { SuspectFormComponent } from './suspect-form/suspect-form.component';
import { ArmeFormComponent } from './arme-form/arme-form.component';
import { VehiculeFormComponent } from './vehicule-form/vehicule-form.component';
import { AffaireFormComponent } from './affaire-form/affaire-form.component';
import { Page404Component } from './page-404/page-404.component';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth-guard.service';
import { GestionViewComponent } from './gestion-view/gestion-view.component';
import { ListeArmesComponent } from './liste-armes/liste-armes.component';

import { AjoutArmeComponent } from './ajout-arme/ajout-arme.component';
import { ModifArmeComponent } from './modif-arme/modif-arme.component';

const routes: Routes = [

  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'index',  component: IndexComponent, children: [

    { path: '', redirectTo: 'hotlist', pathMatch: 'full'},

    { path: 'accordeon-recherche', component: AccordeonRechercheComponent , children: [

      { path: 'suspect-form', component: SuspectFormComponent },
      { path: 'arme-form', component: ArmeFormComponent },
      { path: 'vehicule-form', component: VehiculeFormComponent },
      { path: 'affaire-form', component: AffaireFormComponent },
    ]

  },

    { path: 'affichage-recherche', component: AffichageRechercheComponent },

    { path: 'profil', component: ProfilComponent },

    { path: 'gestion', component: GestionViewComponent, children : [

     
      {path: 'ajoutArme', component: AjoutArmeComponent},
      {path: 'listeArmes', component: ListeArmesComponent,},
      {path: 'listeArmes/:id', component: ModifArmeComponent}
      
    ]},
    
    { path: 'gestion-affaire', component: GestionAffaireComponent },

   // { path: 'hotlist',canActivate: [AuthGuardService], component: HotlistComponent },
  ]

},

  { path : '404', component: Page404Component},
  { path: '**', redirectTo: '404' },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports : [
    RouterModule
    ]
})

export class AppRoutingModule { }
