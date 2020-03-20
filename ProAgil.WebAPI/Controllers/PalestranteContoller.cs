using Microsoft.EntityFrameworkCore;
using System;  
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using ProAgil.Domain;
using ProAgil.Repository;

namespace ProAgil.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PalestranteContoller : ControllerBase
    {
        private readonly IProAgilRepository _repo;
        public PalestranteContoller(IProAgilRepository repo)
        {
            _repo = repo;
        }

        //GET
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                var results = await _repo.GetAllPalestrantesAsync(true);
                return Ok(results);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }
        }

        [HttpGet("id/{palestranteId}")]
        public async Task<ActionResult> Get(int palestranteId)
        {
            try
            {
                var results = await _repo.GetPalestranteByIdAsync(palestranteId , true);
                return Ok(results);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }
        }

        [HttpGet("id/{nome}")]
        public async Task<ActionResult> Get(string nome)
        {
            try
            {
                var results = await _repo.GetPalestrantesByNameAsync(nome, true);
                return Ok(results);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }
        }

        //POST
        [HttpPost]
        public async Task<ActionResult> Post(Palestrante palestrante)
        {
            try
            {
                _repo.Add(palestrante);

                if(await _repo.SaveChangesAsync()) 
                {
                    return Created($"/api/palestrante/id/{palestrante.Id}", palestrante);
                }
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }

            return BadRequest();
        }

        //PUT
        [HttpPut]
        public async Task<ActionResult> Put(int id)
        {
            try
            {
                Palestrante palestrante = await _repo.GetPalestranteByIdAsync(id , false);
                if(palestrante == null)
                {
                    return NotFound();
                }

                _repo.Update(palestrante);
                if(await _repo.SaveChangesAsync()) 
                {
                    return Created($"/api/palestrante/id/{palestrante.Id}", palestrante);
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
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                Palestrante palestrante = await _repo.GetPalestranteByIdAsync(id , false);
                if(palestrante == null)
                {
                    return NotFound();
                }

                _repo.Delete(palestrante);
                if(await _repo.SaveChangesAsync()) 
                {
                    return Created($"/api/palestrante/id/{palestrante.Id}", palestrante);
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