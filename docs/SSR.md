# Server Side Rendering

In NextJS any component with the async method signature, is considered a SSR component. This means you cannot have or implement:

1. 'use client';
2. hooks such as useState() or useEffect() and or other client side features

Whilst this may seem challenging in a way, it appears NextJS enforces a clear separation between client and server side components.  

```tsx
export default async function MyServerSideRenderingComponent() { ... }
```

Lets try following the ControllerComponent pattern where the SSRComponent is the controller and the direct child is the sub controller or 1st initial client component that holds state and other functional component lifecycle events. 