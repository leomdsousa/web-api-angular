import { Evento } from './Evento';
import { Palestrante } from './Palestrante';

export interface PalestranteEvento {
    eventoId: number;
    evento: Evento;
    palestranteId: number;
    palestrante: Palestrante;
}
