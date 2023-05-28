import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Afiliado } from 'src/app/models/afiliado';
import { AfiliadoService } from 'src/app/services/afiliado.service';

@Component({
  selector: 'app-editarafiliado',
  templateUrl: './editarafiliado.component.html',
  styleUrls: ['./editarafiliado.component.css']
})
export class EditarafiliadoComponent implements OnInit {


  // Atributos
  tituloInicial = 'Afiliados - Nuevo Afiliado';
  afiliadoForm = this.fb.group({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl('')
  });
  public idElement: number = 0;
  public editarAf: Afiliado = {
    id: 0,
    name: '',
    age: 0,
    email: ''
  };

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private afiliadoServide: AfiliadoService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idElement = params['id'];
    });
    this.traerAfiliado();
  };


  // Métodos
  traerAfiliado() {
    this.afiliadoServide.getAfiliado(this.idElement).subscribe(afEditar => {
      this.afiliadoForm = this.fb.group({
        name: [afEditar.name, Validators.required],
        age: [afEditar.age.toString(), Validators.required],
        email: [afEditar.email, Validators.required],
      });
      this.editarAf.id = afEditar.id;
    })
  }

  editarAfiliado(afiliadoForm: any) {
    this.editarAf.name = afiliadoForm.value.name;
    this.editarAf.age = afiliadoForm.value.age;
    this.editarAf.email = afiliadoForm.value.email;
    this.afiliadoServide.putAfiliado(this.editarAf).subscribe(editAff => {
      console.log(editAff);
      this.snackBar.open(`El afiliado con ID ${editAff.id} ha sido actualizado con éxito`, '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
      this.afiliadoForm.reset();
    }, (msg) => {
      console.log('hubo un error', msg);
    },
      () => this.volverRuta())
  }

  volverRuta() {
    this.router.navigate(['/dashboard/afiliados']);
  }
}
