using ProAgil.Domain;
using System.Threading.Tasks;

namespace ProAgil.Repository
{
    public interface IProAgilRepository
    {
        //GERAL
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync(); 

         //EVENTO
        Task<Evento[]> GetAllEventosAsync(bool incluirPalestrante); 
        Task<Evento[]> GetEventosByTemaAsync(string tema, bool incluirPalestrante); 
        Task<Evento> GetEventoByIdAsync(int id, bool incluirPalestrante); 

         //PALESTRANTES
        Task<Palestrante[]> GetAllPalestrantesAsync(bool incluirEvento); 
        Task<Palestrante[]> GetPalestrantesByNameAsync(string palestrante, bool incluirEvento); 
        Task<Palestrante> GetPalestranteByIdAsync(int id, bool incluirEvento); 
    }
}