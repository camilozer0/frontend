import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Afiliado } from 'src/app/models/afiliado';
import { AfiliadoService } from 'src/app/services/afiliado.service';

@Component({
  selector: 'app-editarafiliado',
  templateUrl: './editarafiliado.component.html',
  styleUrls: ['./editarafiliado.component.css']
})
export class EditarafiliadoComponent implements OnInit {
  tituloInicial = 'Afiliados - Nuevo Afiliado';

  /*   selectedValue: string = '';
    selectedCar: string = ''; */

  afiliadoForm = this.fb.group({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl('')
  });

  public idElement: number = 0;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private afiliadoServide: AfiliadoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idElement = params['id'];
    });
    this.traerAfiliado();
  };

  public editarAf: Afiliado = {
    id: 0,
    name: '',
    age: 0,
    email: ''
  };

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
    //this.editarAf.id = afiliadoForm.value.id;
    this.editarAf.name = afiliadoForm.value.name;
    this.editarAf.age = afiliadoForm.value.age;
    this.editarAf.email = afiliadoForm.value.email;
    console.log(afiliadoForm)
    this.afiliadoServide.putAfiliado(this.editarAf).subscribe(response => {
      console.log(response);
    })
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

}
