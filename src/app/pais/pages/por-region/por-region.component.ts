import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
})
export class PorRegionComponent {
  public regiones: string[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];
  public regionActiva: string = '';
  public paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];
    this.paisService.getRegion(region).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        this.paises = [];
      }
    );
  }
  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary m-1'
      : 'btn btn-outline-primary m-1';
  }
}
