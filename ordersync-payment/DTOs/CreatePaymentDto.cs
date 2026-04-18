namespace ordersync_payment.Dtos;

public class CreatePaymentDto
{
    public long OrderId { get; set; }
    public decimal Amount { get; set; }
}