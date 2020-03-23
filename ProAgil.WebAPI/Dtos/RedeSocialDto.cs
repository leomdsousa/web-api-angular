using System;
using System.ComponentModel.DataAnnotations;

namespace ProAgil.WebAPI.Dtos {

    public class RedeSocialDto {
        public int Id { get; set; }

        [Required(ErrorMessage="Campo {0} é obrigatório")]
        [StringLength(3, MinimumLength=50, ErrorMessage="{0} deve ser entre 3 e 50 caracteres")]
        public string Nome { get; set; }

        [Required(ErrorMessage="Campo {0} é obrigatório")]
        public string Url { get; set; }
    }
}