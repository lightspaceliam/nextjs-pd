# NextJS Personal Development

## Areas Of Interest

- Topology and conventions of NextJS
- Server Side Rendering SSR
- API requests
- Routing
- [Implementing Material UI](https://mui.com/material-ui/integrations/nextjs/?srsltid=AfmBOorQGb67h9bJsdp_lzRNnEEj14QTZwQh2mMJWQIT_c2n1mKF9a5a)
- And more

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Topology and conventions of NextJS

**Entry Point File:**

The entry point file in NextJS is: `app\layout.tsx`

## Routing

```
|   application
|       app
|           page.tsx            /
|           simple-forms        /simple-forms
|               page.tsx
|               [slug]
|                   page.tsx    /simple-forms/{id}
```
