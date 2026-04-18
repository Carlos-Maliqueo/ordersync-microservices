using Microsoft.AspNetCore.Mvc;
using ordersync_payment.Dtos;
using ordersync_payment.Services;

namespace ordersync_payment.Controllers;

[ApiController]
[Route("payments")]
public class PaymentsController : ControllerBase
{
    private readonly PaymentService _paymentService;

    public PaymentsController()
    {
        _paymentService = new PaymentService();
    }

    [HttpPost]
    public async Task<IActionResult> ProcessPayment([FromBody] CreatePaymentDto dto)
    {
        Console.WriteLine($"OrderId: {dto.OrderId}, Amount: {dto.Amount}");

        if (dto == null) return BadRequest("DTO is null");

        var result = await _paymentService.ProcessPayment(dto.OrderId, dto.Amount);

        return Ok(result);
    }
}