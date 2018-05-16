import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, NgForm } from '@angular/forms';
import { Arme } from '../arme';
import { ArmesService } from '../armes.service';
import { Router } from '@angular/router';
import { HttpInterceptor } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-ajout-arme',
  templateUrl: './ajout-arme.component.html',
  styleUrls: ['./ajout-arme.component.css']
})

export class AjoutArmeComponent implements OnInit {

  typeControl = new FormControl('', [Validators.required]);

  types = [
    {value: 'Pistolet', name: 'Pistolet'},
    {value: 'Fusil', name: 'Fusil'},
    {value: 'Bazooka',name: 'Bazooka'},
    {value: 'Tank', name: 'Tank'},
    {value: 'Battle Station', name: 'Battle Station'}
  ];

  armeForm: FormGroup;
  public errorMsg;

  constructor(private formBuilder: FormBuilder, private armesService : ArmesService,  private router: Router, 
                      private snackbar : MatSnackBar)
  { }
   
  onSubmit() {
    const formValue = this.armeForm.value;
    console.log(this.armeForm);
    const newArme = new Arme(
      formValue['typeArme'],
      formValue['typeMunition'],
      formValue['nomArme'],
      formValue['numeroSerieArme'],
     );

    if (!this.armeForm.valid) {
    this.snackbar.open('Formulaire pas valide', 'OK');
      return;
    }
 
    // Validation de l'ajout de l'arme et retour a la liste des armes 

    this.armesService.creationArme(newArme).subscribe(
      () => this.router.navigateByUrl('/index/gestion/listeArmes'),
      error => this.errorMsg = "Le numéro de série est déjà existant"
        );
  
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.armeForm = this.formBuilder.group({
      typeArme:['', Validators.required],
      typeMunition: ['', Validators.required],
      nomArme:  ['', Validators.required],
      numeroSerieArme:  ['', Validators.required],
    });
  }




}
