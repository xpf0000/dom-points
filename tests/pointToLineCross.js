import { expect } from 'chai'
import { pointToLineCross } from "../src"

function test_pointToLineCross (info, p, line, expected) {
  it(info, function (done) {
    expect(pointToLineCross(p, line)).to.be.eql(expected)
    done()
  })
}

describe('TEST pointToLineCross', function () {
  test_pointToLineCross('{x: 0, y: 0}, [{x: 0, y: 0}, {x: 10, y: 0}]: {x: 0, y: 0}', {x: 0, y: 0}, [{x: 0, y: 0}, {x: 10, y: 0}], {x: 0, y: 0})
  test_pointToLineCross('{x: 5, y: 10}, [{x: 0, y: 10},{x: 10, y: 10}]: {x: 5, y: 10}', {x: 5, y: 10}, [{x: 0, y: 10},{x: 10, y: 10}], {x: 5, y: 10})
  test_pointToLineCross('{x: 0, y: 5}, [{x: 10, y: 0},{x: 10, y: 10}]: {x: 10, y: 5}', {x: 0, y: 5}, [{x: 10, y: 0},{x: 10, y: 10}], {x: 10, y: 5})
  test_pointToLineCross('{x: 0, y: 0}, [{x: 10, y: 0},{x: 0, y: 10}]: {x: 10, y: 5}', {x: 0, y: 0}, [{x: 10, y: 0},{x: 0, y: 10}], {x: 5, y: 5})
})
