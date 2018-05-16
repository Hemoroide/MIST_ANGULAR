export class Arme {

  id : number;
  typeArme : '';
  typeMunition : '';
  nomArme : '';
  numeroSerieArme : '';

  constructor(typeArme, typeMunition, nomArme, numeroSerieArme) {
   this.nomArme = nomArme;
   this.numeroSerieArme = numeroSerieArme;
   this.typeArme = typeArme;
   this.typeMunition = typeMunition;

}

}
