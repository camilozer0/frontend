import { Afiliado } from "./afiliado";
import { Test } from "./test";

export interface Cita {
  id: number;
  fecha: Date;
  hora: Date;
  idTest: Test[];
  idAffiliate: Afiliado[]
}
