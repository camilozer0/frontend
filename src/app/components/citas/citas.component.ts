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

  public citasShow: any[] = [
    {
      id: 0,
      date: '',
      hour: '',
      idTest: 0,
      idAffiliate: 0
    }
  ];

  public citas2: any[] = [];
  public colQ: any[] = ['id', 'date', 'hour', 'id Test', 'id Affiliate'];

  constructor(private citasServices: CitaService) { }

  ngOnInit(): void {
    this.cargarAfiliado();
  }

  cargarAfiliado() {
    this.citasServices.getCitas().subscribe(response => {
      this.citas = response;
      this.citas2 = response.map(o => Object.values(o)[1]);
      this.citas2 = response.map(o => Object.values(o)[1]);
      this.citas2 = response.map(o => Object.values(o)[1]);
      this.citas2 = response.map(o => Object.values(o)[1]);
      this.citas2 = response.map(o => Object.values(o)[1]);

      //Recordar acá cuadrar la parte de las citas
      console.log(this.citas2 = response.map(o => Object.values(o)[1]));
      console.log(this.citas2)
      //console.log(Object.values(this.citas[0]['idAffiliate'])[0]);
    });


  }
}
