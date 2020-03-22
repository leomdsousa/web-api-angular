import { Lote } from './Lote';
import { RedeSocial } from './RedeSocial';
import { PalestranteEvento } from './PalestranteEvento';

export interface Evento {
    id: number;
    local: string;
    dataEvento: Date;
    tema: string;
    qtdPessoas: number;
    imagemUrl: string;
    telefone: string;
    email: string;
    lotes: Lote[];
    redeSociais: RedeSocial[];
    palestrantesEventos: PalestranteEvento[];
}
