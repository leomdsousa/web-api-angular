using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ProAgil.Repository; 
using ProAgil.Domain;
using Microsoft.AspNetCore.Http;

namespace ProAgil.WebAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class EventoController : ControllerBase
    {
        private readonly IProAgilRepository _repo;
        public EventoController(IProAgilRepository repo)
        {
            _repo = repo;
        }

        //GET
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                var results = await _repo.GetAllEventosAsync(true);
                return Ok(results);
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
                var results = await _repo.GetEventoByIdAsync(eventoId, true);
                return Ok(results);
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
                var results = await _repo.GetEventosByTemaAsync(tema, true);
                return Ok(results);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }
        }

        //POST
        [HttpPost]
        public async Task<ActionResult> Post(Evento model)
        {
            try
            {
                _repo.Add(model);
                if(await _repo.SaveChangesAsync()) 
                {
                    return Created($"/api/evento/id/{model.Id}", model);
                }
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }

            return BadRequest();
        }

        //PUT
        [HttpPut("update/{eventoId}")]
        public async Task<ActionResult> Put(int eventoId)
        {
            try
            {
                Evento evento = await _repo.GetEventoByIdAsync(eventoId, false);
                if(evento == null)
                    return NotFound();   

                _repo.Update(evento);
                if(await _repo.SaveChangesAsync()) 
                {
                    return Created($"/api/evento/{evento.Id}", evento);
                }
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }

            return BadRequest();
        }

        //DELETE
        [HttpDelete]
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