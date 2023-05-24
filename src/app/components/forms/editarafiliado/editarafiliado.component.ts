import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Afiliado } from 'src/app/models/afiliado';
import { AfiliadoService } from 'src/app/services/afiliado.service';

@Component({
  selector: 'app-editarafiliado',
  templateUrl: './editarafiliado.component.html',
  styleUrls: ['./editarafiliado.component.css']
})
export class EditarafiliadoComponent implements OnInit {

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
    private afiliadoServide: AfiliadoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idElement = params['id'];
    });
    this.traerAfiliado();
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
      this.afiliadoForm.reset();
      this.volverRuta();
    })
  }

  volverRuta() {
    //this.router.navigate(['../'], { relativeTo: this.route });
    this.router.navigate(['/dashboard/afiliados']);
  }
}
