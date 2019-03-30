# React Selective Hydration

Selectively hydrate server rendered React components!

Inspired by [second](https://github.com/wildlyinaccurate/second)

Check out the different versions (tagged in git)

## Up and Running

```bash
npm install
npm start
```

## Caveats / Nice to Know

- Renders a `<div>` element around the component
- Need to use different Version of component in server- and client-side code
- Can only hydrate a single instance of each component type as of now. For lists hydrate the wrapper
- Can only hydrate props, no state or data fetching
