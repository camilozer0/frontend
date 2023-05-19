import { Afiliado } from "./afiliado";
import { Test } from "./test";

export interface Cita {
  id?: number;
  date: string;
  hour: string;
  idTest: Test;
  idAffiliate: Afiliado
}
