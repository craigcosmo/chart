## Demo

`http://craigcosmo.github.io/chart`

## Wavegenerator API

```js
// Create the wave generator
var gen = new WaveGenerator();
// Generate a wave
var data = gen.next();
// Generate another wave
var data2 = gen.next();
```

## Chart API

use together with wave api

```js
var chart = new Chart({
        // this option take an array of data
        wave: [],
        // svgId is the id of the target svg, it takes string
        svgId: chart_id
        // columnWidth is the width of the column measure in px, default 30
        columnWidth: 30
        // columnMaxHeight is maximum height of the column measuared in px, default 200
        columnMaxHeight: 200
        // gap is the gap among column measured in px, default 40
        gap: 40
    });
```
