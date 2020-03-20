import { Lote } from './Lote';
import { RedeSocial } from './RedeSocial';
import { PalestranteEvento } from './PalestranteEvento';

export interface Evento {
    id: number;
    tema: string;
    local: string;
    lLote: string;
    dataEvento: Date;
    qtdPessoas: number;
    imagemUrl: string;
    telefone: string;
    email: string;
    lotes: Lote[];
    redeSociais: RedeSocial[];
    palestrantesEventos: PalestranteEvento[];
}
