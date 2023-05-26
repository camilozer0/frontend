import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Afiliado } from 'src/app/models/afiliado';
import { AfiliadoService } from 'src/app/services/afiliado.service';

@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css']
})
export class AfiliadosComponent implements OnInit, OnChanges {

  // Atributos
  tituloInicial = 'Afiliados';
  public afiliados: any[] = [];
  public colQ: any[] = ['id', 'name', 'age', 'email'];
  public optionAff = true;


  constructor(private afiliadoService: AfiliadoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.cargarAfiliados();
  }

  ngOnInit(): void {
    this.cargarAfiliados();
  }


  // Métodos
  cargarAfiliados() {
    this.afiliadoService.getAfiliados().subscribe(response => {
      this.afiliados = response;
      console.log(response);
    });
  }

}
