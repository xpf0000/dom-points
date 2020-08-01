<h1 align="center">Dom-Points</h1>

[![Latest Version on NPM](https://img.shields.io/npm/v/@xpf0000/dom-points.svg?style=flat-square)](https://npmjs.com/package/@xpf0000/dom-points)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![npm](https://img.shields.io/npm/dt/@xpf0000/dom-points.svg?style=flat-square)](https://www.npmjs.com/package/@xpf0000/dom-points)

> DOM Tools Collection, include matrixToDeg pointsDistance pointToLineCross pointToLineDistance pointIsInPolygon polygonIsInPolygon clientDeg clientCenterPoint clientOriginalPoints clientBoundsPoints rectBoundsToRect...


## Table of Contents

* [Install and basic usage](#install-and-basic-usage)
  * [Methods](#methods)
* [Contributing](#contributing)
* [License](#license)


## Install and basic usage

```bash
$ npm install --save @xpf0000/dom-points
```

```js
import { pointsDistance } from '@xpf0000/dom-points'
pointsDistance({x: number, y: number}, {x: 20, y: 20})
```

```bash
<script type="module" src="./dist/domPoints.js"></script>
```

```html
<script type="module">
      let dist = DomPoints.pointsDistance({x: number, y: number}, {x: 20, y: 20})
</script>
```

### Methods

#### matrixToDeg
@param matrix<br>
@returns {number}<br>

transform matrix to Deg

```js
matrixToDeg('matrix(0.939693, 0.34202, -0.34202, 0.939693, 0, 0)')
```

#### pointsDistance
@param p1: {x: number, y: number}<br>
@param p2: {x: number, y: number}<br>
@returns {number}<br>

point p1 distance to p2

```js
pointsDistance({x: number, y: number}, {x: 20, y: 20})
```

#### pointToLineDistance
@param p: {x: number, y: number}<br>
@param line: \[{x: number, y: number}, {x: number, y: number}\]<br>
@returns {number}<br>

point distance to line

```js
pointToLineDistance({x: number, y: number}, [{x: number, y: number}, {x: number, y: number}])
```

#### pointToLineCross
@param p: {x: number, y: number}<br>
@param line: \[{x: number, y: number}, {x: number, y: number}\]<br>
@returns {number}<br>

The intersection of a point and a line segment

```js
pointToLineCross({x: number, y: number}, [{x: number, y: number}, {x: number, y: number}])
```

#### pointIsOnLine
@param p: {x: number, y: number}<br>
@param line: \[{x: number, y: number}, {x: number, y: number}\]<br>
@returns {number}<br>

The point is on a line segment

```js
pointIsOnLine({x: number, y: number}, [{x: number, y: number}, {x: number, y: number}])
```

#### pointIsInPolygon
@param p: {x: number, y: number}<br>
@param polygon: \[{x: number, y: number}, {x: number, y: number}, {x: number, y: number}...\]<br>
@returns {boolean}<br>

Is the point inside the polygon

```js
pointIsInPolygon({x: number, y: number}, [{x: number, y: number}, {x: number, y: number}, {x: number, y: number}])
```

#### polygonIsInPolygon
@param polygon: \[{x: number, y: number},{x: number, y: number},{x: number, y: number}...\]<br>
@param polygon1: \[{x: number, y: number}, {x: number, y: number}, {x: number, y: number}...\]<br>
@returns {boolean}<br>

Is the polygon inside the polygon

```js
polygonIsInPolygon([{x: number, y: number},{x: number, y: number},{x: number, y: number}], [{x: number, y: number}, {x: number, y: number}, {x: number, y: number}])
```

#### rotatePoint
@param center: {x: number, y: number}<br>
@param point: {x: number, y: number}<br>
@param deg: 0<br>
@returns {x: number, y: number}<br>

the new point of point rotates the deg angle around the center

```js
rotatePoint({x: number, y: number}, {x: number, y: number}, 0)
```

#### clientDeg
@param dom: html Dom<br>
@returns {number}<br>

the deg angle of dom to client

```html
<div id="a" style="transform: rotate(15deg)">
    <div id="b" style="transform: rotate(-60deg)">
        <div id="c" style="transform: rotate(130deg)">
        </div>
    </div>
</div>
clientDeg(document.getElementById('c'))
```

#### clientCenterPoint
@param dom: html Dom<br>
@returns {x: number, y: number}<br>

the center point of dom to client

```html
<div id="a" style="transform: rotate(15deg)">
    <div id="b" style="transform: rotate(-60deg)">
        <div id="c" style="transform: rotate(130deg)">
        </div>
    </div>
</div>
clientCenterPoint(document.getElementById('c'))
```

#### clientOriginalPoints
@param dom: html Dom<br>
@returns \[{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number}\]<br>

the points of the four corners of dom to client without rotate

```html
<div id="a" style="transform: rotate(15deg)">
    <div id="b" style="transform: rotate(-60deg)">
        <div id="c" style="transform: rotate(130deg)">
        </div>
    </div>
</div>
clientOriginalPoints(document.getElementById('c'))
```

#### clientBoundsPoints
@param dom: html Dom<br>
@returns \[{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number}\]<br>

the points of the four corners of a rect which make by dom rotated to client

```html
<div id="a" style="transform: rotate(15deg)">
    <div id="b" style="transform: rotate(-60deg)">
        <div id="c" style="transform: rotate(130deg)">
        </div>
    </div>
</div>
clientBoundsPoints(document.getElementById('c'))
```

#### rectBoundsToRect
@param dom: html Dom<br>
@param toDom: html Dom<br>
@returns {top: number, left: number, bottom: number, width: number, right: number, height: number}<br>

the position of a rect which make by dom rotated to toDom

```html
<div id="a" style="transform: rotate(15deg)">
    <div id="b" style="transform: rotate(-60deg)">
        <div id="c" style="transform: rotate(130deg)">
        </div>
    </div>
</div>
rectBoundsToRect(document.getElementById('c'), document.getElementById('a'))
```

## Contributing

Any contribution to the code or any part of the documentation and any idea and/or suggestion are very welcome.

``` bash
# serve with hot reload at localhost:8080
npm run serve

# run test
npm run test

# distribution build-bundle
npm run build
```

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
