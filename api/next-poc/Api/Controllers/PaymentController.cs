using Entities.DbContexts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
    [ApiController]
    [Route("payments")]
    public class PaymentController : ControllerBase
    {        
        private readonly ILogger<PaymentController> _logger;
        private readonly NextDbContext _context;

        public PaymentController(
            ILogger<PaymentController> logger,
            NextDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var payments = await _context.Payments
                .OrderBy(p => p.Amount)
                .ToListAsync();

            return Ok(payments);
        }

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var payment = await _context.Payments
                .FirstOrDefaultAsync(p => p.Id == id);

            return Ok(payment);
        }
    }
}
