import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdComponent } from '../../shared/confirmd/confirmd.component';
import { AfiliadoService } from 'src/app/services/afiliado.service';
import { Afiliado } from 'src/app/models/afiliado';


@Component({
  selector: 'app-nuevoafiliado',
  templateUrl: './nuevoafiliado.component.html',
  styleUrls: ['./nuevoafiliado.component.css']
})
export class NuevoafiliadoComponent implements OnInit {

  selectedValue: string = '';
  selectedCar: string = '';

  tituloInicial = 'Afiliados - Nuevo Afiliado';

  public aff: Afiliado = {
    name: '',
    age: 0,
    email: ''
  };

  afiliadosForm = this.fb.group({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private fb: FormBuilder, public dialog: MatDialog, private afiliadoService: AfiliadoService) { }

  ngOnInit(): void { }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmdComponent, {
      width: '180px',
      data: 'esta seguro?'
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        console.log('crear el afiliado')
      }
    });
  }

  crearAfiliado(data: any): void {
    this.aff.name = data.value.name;
    this.aff.age = data.value.age;
    this.aff.email = data.value.email;

    console.log(this.aff);

    this.afiliadoService.postAfiliado(this.aff).subscribe(response => {
      this.aff = response;
      console.log(this.aff)
    });
  }

}
