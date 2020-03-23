using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProAgil.Repository; 
using ProAgil.Domain;
using ProAgil.WebAPI.Dtos;
using AutoMapper;

namespace ProAgil.WebAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class EventoController : ControllerBase
    {
        private readonly IProAgilRepository _repo;
        private readonly IMapper _mapper;
        public EventoController(IProAgilRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        //GET
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                var eventos = await _repo.GetAllEventosAsync(true);
                var eventosRetorno = _mapper.Map<EventoDto[]>(eventos);

                return Ok(eventosRetorno);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }
        }
        [HttpGet("id/{eventoId}")]
        public async Task<ActionResult> Get(int eventoId)
        {
            try
            {
                Evento evento = await _repo.GetEventoByIdAsync(eventoId, true);
                if(evento == null) return NotFound();

                var eventoRetorno = _mapper.Map<EventoDto>(evento);

                return Ok(eventoRetorno);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }
        }

        [HttpGet("tema/{tema}")]
        public async Task<ActionResult> Get(string tema)
        {
            try
            {
                var evento = await _repo.GetEventosByTemaAsync(tema, true);
                if(evento == null) return NotFound(); 

                var eventoRetorno = _mapper.Map<EventoDto>(evento);

                return Ok(eventoRetorno);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }
        }

        //POST
        [HttpPost]
        public async Task<ActionResult> Post(EventoDto eventoDto)
        {
            try
            {

                var evento = _mapper.Map<Evento>(eventoDto);

                _repo.Add(evento);
                if(await _repo.SaveChangesAsync()) 
                {
                    return Created($"/api/evento/id/{eventoDto.Id}", _mapper.Map<EventoDto>(evento));
                }
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }

            return BadRequest();
        }

        //PUT
        [HttpPut("{Id}")]
        public async Task<ActionResult> Put(int Id, EventoDto eventoDto)
        {
            try
            {
                Evento evento = await _repo.GetEventoByIdAsync(Id, false);
                if(evento == null) return NotFound();   

                _mapper.Map(eventoDto, evento);

                _repo.Update(evento);
                if(await _repo.SaveChangesAsync()) 
                {
                    return Created($"/api/evento/id/{eventoDto.Id}", _mapper.Map<EventoDto>(evento));
                }
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }

            return BadRequest();
        }

        //DELETE
        [HttpDelete("{eventoId}")]
        public async Task<ActionResult> Delete(int eventoId)
        {
            try
            {
                Evento evento = await _repo.GetEventoByIdAsync(eventoId, false);
                if(evento == null)
                    return NotFound();   

                _repo.Delete(evento);
                if(await _repo.SaveChangesAsync()) 
                {
                    return Ok();
                }
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }

            return BadRequest();
        }
    }
}