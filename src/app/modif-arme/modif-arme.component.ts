import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ArmesService } from '../armes.service';
import { Arme } from '../arme';


@Component({
  selector: 'app-modif-arme',
  templateUrl: './modif-arme.component.html',
  styleUrls: ['./modif-arme.component.css']
})
export class ModifArmeComponent implements OnInit {

  id:number;
  arme: Arme;
  errText: string;
  formulaire: NgForm;
  erreur = false;
  majArme;

  constructor(private route: ActivatedRoute, private router: Router, private armeService: ArmesService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loadArmes(this.id);
  }

  onSubmit(form: NgForm) {
    this.formulaire = form;
    const nomArme = form.value['nomArme'];
    const typeArme = form.value['typeArme'];
    const typeMunition = form.value['typeMunition'];
    const numeroSerieArme = form.value['numeroSerieArme'];

    this.majArme = new Arme(typeArme, typeMunition, nomArme, numeroSerieArme);

    console.log(JSON.stringify(this.majArme));

    if (!this.erreur) {
      this.armeService.updateArme(this.arme.id, this.majArme).subscribe(
        (data) => this.router.navigateByUrl('/index/gestion/listeArmes')
      );
    }
  }

  loadArmes(id: number) {
    this.armeService.getArme(id).subscribe(
      (data) => {
        this.arme = data;
      }
     );
  }

}