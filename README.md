# StarSoft QA Programming Exercise

The aim of this exercise is to write a small web application.

The application is a simple interactive wave visualisation, rendered using an SVG element.

A script to generate the wave data has been provided in wavegen.js
It can be used as follows:
```javascript
// Create the wave generator
var gen = new WaveGenerator();
// Generate a wave
var data = gen.next();
// Generate another wave
var data2 = gen.next();
```

## Tasks
 1. Draw the wave data in an embedded SVG image.
 2. Add a 'next' button which generates new wave data and updates the wave drawing.
 3. Add a mouseover which displays the height of the wave at the mouse's x-position.


You are free to use any resources available online,
including any open-source third-party libraries.

When working though this exercise, take care to write quality code,
as you would in an professional environment.

The exercise should take around 1 hour, although more time may be used if needed.

