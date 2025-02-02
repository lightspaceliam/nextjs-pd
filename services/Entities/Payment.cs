using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using Entities.Abstract;

namespace Entities
{
    public class Payment : EntityBase
    {
        [DataMember]
        [Required(ErrorMessage = "Card holder name is required")]
        [StringLength(16)]
        public string CardHolderName { get; set; } = default!;

        [DataMember]
        [Required(ErrorMessage = "Amount is required")]
        public decimal Amount { get; set; } = default!;
    }
}
