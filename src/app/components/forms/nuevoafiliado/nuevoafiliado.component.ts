import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AfiliadoService } from 'src/app/services/afiliado.service';
import { Afiliado } from 'src/app/models/afiliado';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-nuevoafiliado',
  templateUrl: './nuevoafiliado.component.html',
  styleUrls: ['./nuevoafiliado.component.css']
})
export class NuevoafiliadoComponent implements OnInit {

  // Atributos
  tituloInicial = 'Afiliados - Nuevo Afiliado';
  public aff: Afiliado = {
    name: '',
    age: 0,
    email: ''
  };
  afiliadosForm = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    age: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private fb: FormBuilder,
    public dialog: MatDialog,
    private afiliadoService: AfiliadoService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  // Métodos
  crearAfiliado(dataAff: any): void {
    this.aff.name = dataAff.value.name;
    this.aff.age = dataAff.value.age;
    this.aff.email = dataAff.value.email;
    this.afiliadoService.postAfiliado(this.aff).subscribe(response => {
      this.aff = response;
      this.afiliadosForm.reset;
      this.snackBar.open(`El afiliado con ID ${this.aff.id} ha sido creado con éxito`, '', {
        duration: 3000,
        verticalPosition: 'bottom'
      });
    }, null,
      () => this.volverRuta());
  }

  volverRuta() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
