# NextJS POC

## Areas Of Interest

- [Topology and conventions of NextJS](https://nextjs.org/docs/app/getting-started/project-structure)
- [Server Side Rendering SSR]()
- [Fetching Data](https://nextjs.org/docs/app/getting-started/fetching-data)
- [Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [Implementing Material UI](https://github.com/lightspaceliam/nextjs-poc/blob/main/client/docs/Mui.md)
- And more

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

## Topology and conventions of NextJS

**Entry Point File:**

The entry point file in NextJS is: `app\layout.tsx`

## Routing

```
|   application
|       app
|           page.tsx            /
|           payments            /payments
|               page.tsx
|               [slug]
|                   page.tsx    /payments/{id}
```

https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-nested-route

## Server Side Rendering (SSR)

```tsx
//  Server Side Rendering 
export default async function SimpleForms() { };

//  I believe any component without the 'async' key word is client side rendering or requires 'use client':
'use client';

export default function SimpleForms() { };

//  If you use MUI's styling engine, all styles require 'use client':

'use client';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledContainer = styled(Box)({
    '&.MuiBox-root': {
        // ...my-styles...
    },
});
```

SSR components cannot implement hooks, so no lifecycle events or state management.