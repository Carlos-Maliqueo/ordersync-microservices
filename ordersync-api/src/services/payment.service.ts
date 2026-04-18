import axios from "axios";

const PAYMENT_API = "http://localhost:5084/payments";

export const processPayment = async (orderId: number, amount: number) => {
  try {
    console.log("Sending to payment service:", {
      OrderId: orderId,
      Amount: amount
    });

    const response = await axios.post(
      PAYMENT_API, 
      {
        OrderId: orderId,
        Amount: amount
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Payment service response:", response.data);

    return response.data;

  } catch (error: any) {
    console.error("Error calling payment service:");
    console.log(error.response?.data || error.message);
    
    throw new Error("Payment service failed");
  }
};