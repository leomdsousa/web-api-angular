import { RedeSocial } from './RedeSocial';
import { PalestranteEvento } from './PalestranteEvento';

export interface Palestrante {
    id: number;
    nome: string;
    miniCurriculo: string;
    imagemUrl: string;
    telefone: string;
    email: string;
    redesSociais: RedeSocial[];
    palestrantesEventos: PalestranteEvento[];
}
