using ordersync_payment.Models;
using System.Text;
using System.Text.Json;
using System.Net.Http;

namespace ordersync_payment.Services;

public class PaymentService
{
    private static List<Payment> payments = new();

    public async Task<Payment> ProcessPayment(long orderId, decimal amount)
    {
        // Simulación de pago
        var payment = new Payment
        {
            Id = payments.Count + 1,
            OrderId = orderId,
            Amount = amount,
            Status = amount > 0 ? "approved" : "failed"
        };

        payments.Add(payment);
        
        // webhook
        using var httpclient = new HttpClient();
        var webhookUrl = "http://localhost:3000/webhook/payment";
        var payload = JsonSerializer.Serialize(payment);
        var content = new StringContent(payload, Encoding.UTF8, "application/json");

        await httpclient.PostAsync(webhookUrl, content);

        return payment;
    }
}