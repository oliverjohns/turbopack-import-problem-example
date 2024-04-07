This repo displays the issue with commonjs importing canvas via react-pdf with turbopack.

## Getting Started

Install dependencies
```bash
npm i
```

Run the development server with turbo:

```bash
npm run dev -- --turbo
```

Goto [http://localhost:3000](http://localhost:3000)

Click the link to the test page

Then this error occurs:

```
./node_modules/pdfjs-dist/build/pdf.js:6247:19
Module not found: Can't resolve 'canvas'
  6245 | class NodeCanvasFactory extends _base_factory.BaseCanvasFactory {
  6246 |   _createCanvas(width, height) {
> 6247 |     const Canvas = require("canvas");
       |                    ^^^^^^^^^^^^^^^^^
  6248 |     return Canvas.createCanvas(width, height);
  6249 |   }
  6250 | }
```