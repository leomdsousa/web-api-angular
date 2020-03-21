import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../_service/Evento.service';
import { Evento } from '../_model/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { defineLocale, BsLocaleService, ptBrLocale } from 'ngx-bootstrap/';
defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-eventos',
  templateUrl: './Eventos.component.html',
  styleUrls: ['./Eventos.component.css']
})
export class EventosComponent implements OnInit {

  /** Construtor */
  constructor(private eventoService: EventoService
            , private modalService: BsModalService
            , private fb: FormBuilder
            , private localeService: BsLocaleService
            )
            {
              this.localeService.use('pt-br');
            }

  /** Variaveis */
  filtroListaProp: string;
  eventosFiltrados: Evento[];
  eventos: Evento[];
  evento: Evento;
  imagemLargura = 30;
  imagemMargem = 2;
  visibleImagem = true;
  registerForm: FormGroup;

  /** Propriedades */
  get filtroLista(): string {
    return this.filtroListaProp;
  }
  set filtroLista(value: string) {
    this.filtroListaProp = value;
    this.eventosFiltrados = this.filtroListaProp ? this.filtrarEventos(this.filtroListaProp) : this.eventos;
  }

  /** Método Inicial */
  ngOnInit() {
    this.validation();
    this.getEventos();
  }

  /** Métodos */
  mostrarImagem() {
    this.visibleImagem = !this.visibleImagem;
  }

  openModal(template: any, editar: boolean = false) {
    this.registerForm.reset();
    // if (editar) {
    //   this.registerForm = Object.assign({}, this.registerForm.value);
    // }
    template.show();
  }

  getEventos() {
    this.eventoService.getEventos().subscribe(
      (_EVENTO: Evento[]) => {
      this.eventos = _EVENTO;
      this.eventosFiltrados = _EVENTO;
      console.log(_EVENTO);
    }, error => {
      console.log(error);
    });
  }

  validation() {
    this.registerForm = this.fb.group({
      tema: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      local: ['', [Validators.required]],
      dataEvento: ['', [Validators.required]],
      qtdPessoas: ['', [Validators.required, Validators.max(120000)]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      imagemUrl: ['', [Validators.required]]
    });
  }

  salvarAlteracao(template: any) {
    if (this.registerForm.valid) {
      this.evento = Object.assign({}, this.registerForm.value);
      this.eventoService.postEvento(this.evento).subscribe(
        (novoEvento: Evento) => {
          console.log(novoEvento);
          template.hide();
          this.getEventos();
        }, error => {
          console.log(error);
        });
    }
  }

  editarEvento(template: any) {
    if (this.registerForm.valid) {
      this.evento = Object.assign({}, this.registerForm.value);
      this.eventoService.putEvento(this.evento).subscribe(
        (novoEvento: Evento) => {
          console.log(novoEvento);
          template.hide();
          this.getEventos();
        }, error => {
          console.log(error);
        });
    }
  }

  filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1);
  }
}
