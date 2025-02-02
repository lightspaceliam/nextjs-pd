# NextJS Personal Development

```
| nextjs-poc
|   clients
|     NextJS application
|
|   services
|     .NET 8 Api & Entities
```

## Clients

Current version of NextJS

### Getting Started

In your command line of choice (Terminal | CMD | PowerShell | ...):

1. Navigate to `nextjs-poc/clients/`
2. Install node_modules: `npm install`
3. Add a `.env` file at the root of `nextjs-poc/clients/.end` and add: BASE_API=http://localhost:5016/
4. After running the Api, run the NextJS app: `npm run dev`
5. Navigate to: `http://localhost:3000/payments`
  - Click on any view links to see the payment details.

## Services

Current version of .NET 8.0

### Getting Started

Requirements:

- [.NET 8](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- SQL Server
  - macOS [Install SQL Server on Docker. There are many but try this](https://medium.com/@ugurelsevket/setting-up-sql-server-with-docker-on-macos-a-step-by-step-guide-8742c725a63e) I also found you needed to modify Docker for apple silicon - Settings / Virtual Machine Options:
    - Check Apple Virtualization framework
    - Use Rosetta for x86_64/amd64 emulation on Apple Silicon
  - Windows [Developer is all that's required](https://www.microsoft.com/en-au/sql-server/sql-server-downloads)

Up to you to configure the connection string to how it works best for you.

In your editor of choice (Visual Studio | Rider | ...):

The Api is configured to run schema migrations to create the database, add single table and seed 3x records for convenance. By default, the connection strings have been set up for Docker. You will need to modify this to suit your environment.

```
| nextjs-poc
|   services
|     Api
|       appsettings.json
|       Program.cs //  line 12 specifies DockerConnection - change to appropriate.
|     Entities
|       DbContexts
|         NextDbContextFactory.cs //  If running migrations.
```

1. Run the Api from your code editor of choice or command line of choice: `dotnet run`
2. Your browser 'should' popup with the Url: `http://localhost:5016/payments`

## Intent

NextJS has been available since 2016. I 1st heard about it in 2020. Since I have a little downtime, I thought I should do some personal development. This simple POC includes:

1. Routing 
    - List /payments/
    - Details /payments/{id}
2. Server Side Rendering (SSR)
3. Api data requests form a database - all running locally

## Final Thoughts

The initial tutorial: [Dashboard App](https://nextjs.org/learn/dashboard-app) was really insightful however routing seemed to be a little challenging to find: [Creating a Nested Route](https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-nested-route) & [Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes) due to the fact I'm still learning NextJS and there are some strong conventions.

Regardless, it's super fast (locally) and if you have reasonable experience with React, it's very straight forward. 

I highly recommend anyone try it out. I can already see a couple of good conventions that help with:

- Composition
- Separation of concerns (sort of MVC if you implement SSR)  
- Middleware - authentication and more