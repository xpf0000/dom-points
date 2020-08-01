import { expect } from 'chai'
import { pointIsInPolygon } from "../src"

function test_pointIsInPolygon (info, p, polygon, expected) {
  it(info, function (done) {
    if (expected) {
      expect(pointIsInPolygon(p, polygon)).to.be.true
    } else {
      expect(pointIsInPolygon(p, polygon)).to.be.false
    }
    done()
  })
}
function objStr (obj) {
  return JSON.stringify(obj)
    .replace(/":/g, ': ')
    .replace(/"/g, '')
    .replace(/,/g, ', ')
}
describe('TEST pointIsInPolygon', function () {
  let p = {x: 0, y: 0}
  let polygon = [{x: 0, y: 0}, {x: 10, y: 0}, {x: 10, y: 10}, {x: 0, y: 10}]
  test_pointIsInPolygon(`${objStr(p)}, ${objStr(polygon)}: true`, p, polygon, true)
  p = {x: -0.2, y: 0}
  test_pointIsInPolygon(`${objStr(p)}, ${objStr(polygon)}: false`, p, polygon, false)
  p = {x: 5, y: 5}
  test_pointIsInPolygon(`${objStr(p)}, ${objStr(polygon)}: true`, p, polygon, true)
})
