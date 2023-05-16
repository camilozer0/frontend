export interface Cita {
  id: number;
  fecha: Date;
  hora: Date;
  idTest: [
    id: number,
    nombre: string,
    descripcion: string
  ];
  idAffiliate: [
    id: number,
    nombre: string,
    edad: number,
    email: string
  ]
}
