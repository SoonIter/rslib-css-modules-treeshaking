# Rslib CSS Modules treeshaking

## Setup

```bash
pnpm install
```

## Details

```ts
// lib/dist/index.js
export { Button } from './Button';
export { Button2 } from './Button2';
```

Button -> used
Button2 -> unused


## Rsbuild

Button(js + css) + Button2(css)

`website/dist/static/css/index.8f403a30.css`

```css
.demo-button-fcDr15 {
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  display: inline-block;
}

.demo-button-unused-xJOPDm {
  cursor: pointer;
  border-radius: 3em;
  line-height: 1;
  display: inline-block;
}

.demo-button2-NGIEqo {
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  display: inline-block;
}

.demo-button2-unused-t_AwAt {
  cursor: pointer;
  border-radius: 3em;
  line-height: 1;
  display: inline-block;
}
```

## Vite

Button(js + css)

`website-vite/dist/assets/index-PEZszd6i.css`

```css
.demo-button-fcDr15 {
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  display: inline-block;
}

.demo-button-unused-xJOPDm {
  cursor: pointer;
  border-radius: 3em;
  line-height: 1;
  display: inline-block;
}
```
