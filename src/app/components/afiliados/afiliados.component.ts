import { Component, OnInit } from '@angular/core';
import { AfiliadoService } from 'src/app/services/afiliado.service';

@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css']
})
export class AfiliadosComponent implements OnInit {

  tituloInicial = 'Afiliados';

  public afiliados: any[] = [];
  public colQ: any[] = ['id', 'name', 'age', 'email'];

  constructor(private afiliadoService: AfiliadoService) { }

  ngOnInit(): void {
    this.cargarAfiliado();
  }

  cargarAfiliado() {
    //this.afiliados = this.afiliadoService.getAfiliado();

    this.afiliadoService.getAfiliado().subscribe(response => {
      this.afiliados = response;
      console.log(response)
    });
  }

}
