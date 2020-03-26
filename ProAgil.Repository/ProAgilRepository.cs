using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Collections.Generic;
using ProAgil.Domain;

namespace ProAgil.Repository
{
    public class ProAgilRepository : IProAgilRepository
    {
        private readonly ProAgilContext _context;
        public ProAgilRepository(ProAgilContext context)
        {
            _context = context;
            _context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }

        //GERAL
        public void Add<T>(T entity) where T : class  
        {
            _context.Add(entity);
        }
        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);            
        } 
        public void Update<T>(T entity) where T : class  
        {
            _context.Update(entity);
        }
        public async Task<bool> SaveChangesAsync() 
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        //EVENTO
        public async Task<Evento[]> GetAllEventosAsync(bool incluirPalestrante = false)
        {
            IQueryable<Evento> eventos = _context.Eventos
                .Include(l => l.Lotes)
                .Include(rs => rs.RedesSociais);

            if(incluirPalestrante) 
                eventos = eventos
                .Include(pe => pe.PalestrantesEventos)
                .ThenInclude(p => p.Palestrante);

            eventos = eventos.AsNoTracking()
                             .OrderByDescending(d => d.DataEvento);

            return await eventos.ToArrayAsync();
        }
        public async Task<Evento[]> GetEventosByTemaAsync(string tema, bool incluirPalestrante = false)
        {
            IQueryable<Evento> eventos = _context.Eventos
                .Include(l => l.Lotes)
                .Include(rs => rs.RedesSociais);

            if(incluirPalestrante) 
                eventos = eventos
                .Include(pe => pe.PalestrantesEventos)
                .ThenInclude(p => p.Palestrante);

            eventos = eventos.AsNoTracking().OrderByDescending(d => d.DataEvento)
                .Where(x => x.Tema.ToLower().Contains(tema.ToLower()));

            return await eventos.ToArrayAsync();
        } 
        public async Task<Evento> GetEventoByIdAsync(int id, bool incluirPalestrante = false)
        {
            IQueryable<Evento> evento = _context.Eventos
                .Include(l => l.Lotes)
                .Include(rs => rs.RedesSociais);

            if(incluirPalestrante) 
                evento = evento
                .Include(pe => pe.PalestrantesEventos)
                .ThenInclude(p => p.Palestrante);

            evento = evento
            .OrderByDescending(e => e.Tema)
            .Where(e => e.Id == id);

            return await evento.AsNoTracking().FirstOrDefaultAsync();
        }

        //PALESTRANTE
        public async Task<Palestrante[]> GetAllPalestrantesAsync(bool incluidEvento = false)
        {
            IQueryable<Palestrante> palestrantes = _context.Palestrantes
                .Include(rs => rs.RedesSociais);

            if(incluidEvento)
                palestrantes = palestrantes
                .Include(pe => pe.PalestrantesEventos)
                .ThenInclude(e => e.Evento);

            return await palestrantes.OrderByDescending(p => p.Nome).ToArrayAsync();
        } 
        public async Task<Palestrante[]> GetPalestrantesByNameAsync(string nome, bool incluirEvento = false)
        {
            IQueryable<Palestrante> palestrantes = _context.Palestrantes
                .Include(rs => rs.RedesSociais);

            if(incluirEvento)
                palestrantes = palestrantes
                .Include(pe => pe.PalestrantesEventos)
                .ThenInclude(e => e.Evento);

            palestrantes = palestrantes
                .OrderByDescending(p => p.Nome)
                .Where(x => x.Nome.ToLower().Contains(nome.ToLower()));

            return await palestrantes.ToArrayAsync();
        } 
        public async Task<Palestrante> GetPalestranteByIdAsync(int id, bool incluidEvento = false)
        {
            IQueryable<Palestrante> palestrante = _context.Palestrantes
                .Include(rs => rs.RedesSociais);

            if(incluidEvento)
                palestrante = palestrante
                .Include(pe => pe.PalestrantesEventos)
                .ThenInclude(e => e.Evento);

            palestrante = palestrante.
            OrderByDescending(p => p.Nome)
            .Where(p => p.Id == id);

            return await palestrante.FirstOrDefaultAsync();
        }
    }
}