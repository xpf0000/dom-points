import { expect } from 'chai'
import { polygonIsInPolygon } from "../src"

function test_polygonIsInPolygon (info, check, inPolygon, expected) {
  it(info, function (done) {
    if (expected) {
      expect(polygonIsInPolygon(check, inPolygon)).to.be.true
    } else {
      expect(polygonIsInPolygon(check, inPolygon)).to.be.false
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
describe('TEST polygonIsInPolygon', function () {
  let check = [{x: 0, y: 0}, {x: 10, y: 0}, {x: 10, y: 10}, {x: 0, y: 10}]
  let inPolygon = [{x: 0, y: 0}, {x: 10, y: 0}, {x: 10, y: 10}, {x: 0, y: 10}]
  test_polygonIsInPolygon(`${objStr(check)}, ${objStr(inPolygon)}: true`, check, inPolygon, true)
  check = [{x: 0, y: 0}, {x: 5, y: 0}, {x: 5, y: 5}, {x: 0, y: 5}]
  test_polygonIsInPolygon(`${objStr(check)}, ${objStr(inPolygon)}: true`, check, inPolygon, true)
  check = [{x: 1, y: 1}, {x: 5, y: 1}, {x: 5, y: 5}, {x: 1, y: 5}]
  test_polygonIsInPolygon(`${objStr(check)}, ${objStr(inPolygon)}: true`, check, inPolygon, true)
  check = [{x: 0, y: 0}, {x: 11, y: 0}, {x: 11, y: 11}, {x: 0, y: 11}]
  test_polygonIsInPolygon(`${objStr(check)}, ${objStr(inPolygon)}: false`, check, inPolygon, false)
  check = [{x: 3, y: 3}, {x: 15, y: 3}, {x: 15, y: 15}, {x: 3, y: 15}]
  test_polygonIsInPolygon(`${objStr(check)}, ${objStr(inPolygon)}: false`, check, inPolygon, false)
})
