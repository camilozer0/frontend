import { Component } from '@angular/core';
import { Cita } from 'src/app/models/cita';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {

  tituloInicial = "Citas";

  public citas: Cita[] = [];
  public citas2: any[] = [];
  public colQ: any[] = ['id', 'date', 'hour', 'idTest', 'idAffiliate'];

  constructor(private citasServices: CitaService) { }

  ngOnInit(): void {
    this.cargarAfiliado();
  }

  cargarAfiliado() {
    this.citasServices.getCitas().subscribe(response => {
      this.citas = response;

      //Recordar acá cuadrar la parte de las citas
      console.log(this.citas2 = response.map(o => Object.values(o)[1]));
      console.log(this.citas2)
      //console.log(Object.values(this.citas[0]['idAffiliate'])[0]);
    });


  }
}
