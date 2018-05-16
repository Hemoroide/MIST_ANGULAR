import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ArmesService } from '../armes.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Arme } from '../arme';
import {DataSource} from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-armes',
  templateUrl: './liste-armes.component.html',
  styleUrls: ['./liste-armes.component.css']
})

export class ListeArmesComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

// creation des colonnes pour affichage //

  armes: Arme[];
  displayedColumns = ['nomArme', 'typeArme', 'typeMunition', 'numeroSerieArme','edit','delete'];
  dataSource;

  // Filtre pour la mise en page des colonnes de la datatable //

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private armeService: ArmesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadArmes();
  }

  loadArmes(){
    this.armeService.getAllArme().subscribe(
      data  => { this.dataSource = new MatTableDataSource(data); 
      this.dataSource.paginator = this.paginator; }
    );
  }

  onDelete(id: number) {
    this.armeService.deleteArme(id).subscribe(
      ()=> this.loadArmes()
    );
      }
    
  
}
