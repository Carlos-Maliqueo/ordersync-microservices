var builder = WebApplication.CreateBuilder(args);

// Agregar soporte para controllers
builder.Services.AddControllers();

var app = builder.Build();

// Middleware
app.UseHttpsRedirection();

// Mapear controllers
app.MapControllers();

app.Run();