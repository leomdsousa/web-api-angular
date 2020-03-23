using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProAgil.WebAPI.Dtos {
    public class EventoDto {
        public int Id { get; set; }

        [Required(ErrorMessage="Campo {0} é obrigatório")]
        public string Tema { get; set; }

        [Required(ErrorMessage="Campo {0} é obrigatório")]
        [StringLength(100, MinimumLength=2)]
        public string Local { get; set; }
        public string Lote { get; set; }

        [Required(ErrorMessage="Campo {0} é obrigatório")]
        public string DataEvento { get; set; }

        [Required]
        [Range(2, 120000, ErrorMessage="Quantidade deve ser entre 2 e 120 mil")]
        public int QtdPessoas { get; set; }

        [Phone]
        public string Telefone { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        public List<LoteDto> Lotes { get; set; }
        public List<RedeSocialDto> RedesSociais { get; set; }
        public List<PalestranteDto> Palestrantes { get; set; }
    }
}