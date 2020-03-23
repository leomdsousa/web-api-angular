using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProAgil.WebAPI.Dtos {
    public class PalestranteDto {
        public int Id { get; set; }

        [Required(ErrorMessage="Campo {0} é obrigatório")]
        [StringLength(3, MinimumLength=50, ErrorMessage="{0} deve ser entre 3 e 50 caracteres")]
        public string Nome { get; set; }
        public string MiniCurriculo { get; set; }

        [Phone]
        public string Telefone { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        public List<RedeSocialDto> RedesSociais { get; set; }
        public List<EventoDto> Eventos { get; set; }
    }
}