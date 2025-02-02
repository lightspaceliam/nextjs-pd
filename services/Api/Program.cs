using Entities.DbContexts;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<NextDbContext>(options =>
{
	var connectionString = builder.Configuration["ConnectionStrings:DockerConnection"];
	options.UseSqlServer(
		connectionString,
		optionsBuilder =>
		{
			optionsBuilder.ExecutionStrategy(
				context => new SqlServerRetryingExecutionStrategy(context, 10, TimeSpan.FromMilliseconds(200), null));
		});

	//  Run schema migrations for convenience.
	var optionsBuilder = new DbContextOptionsBuilder<NextDbContext>();
	optionsBuilder.UseSqlServer(connectionString);
	var context = new NextDbContext(optionsBuilder.Options);

	context.Database.Migrate();
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseAuthorization();

app.MapControllers();

app.Run();