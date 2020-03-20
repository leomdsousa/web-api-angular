import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../_service/Evento.service';
import { Evento } from '../_model/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  templateUrl: './Eventos.component.html',
  styleUrls: ['./Eventos.component.css']
})
export class EventosComponent implements OnInit {

  /** Construtor */
  constructor(private eventoService: EventoService
            , private modalService: BsModalService
            ) { }

  /** Variaveis */
  filtroListaProp: string;
  eventosFiltrados: Evento[];
  eventos: Evento[];
  imagemLargura = 30;
  imagemMargem = 2;
  visibleImagem = true;
  modalRef: BsModalRef;
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
    this.registerForm = new FormGroup({
      tema: new FormControl('',
      [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      local: new FormControl('',
      [Validators.required]),
      dataEvento: new FormControl('',
      [Validators.required]),
      qtdPessoas: new FormControl('',
      [Validators.required, Validators.max(120000)]),
      telefone: new FormControl('',
      [Validators.required]),
      email: new FormControl('',
      [Validators.required, Validators.email]),
      imagemUrl: new FormControl('',
      [Validators.required])
    });
  }

  salvarAlteracao() {
  }

  filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1);
  }
}
