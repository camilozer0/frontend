import { Afiliado } from "./afiliado";
import { Test } from "./test";

export interface Cita {
  id?: number;
  date: Date;
  hour: Date;
  idTest: Test[];
  idAffiliate: Afiliado[]
}
