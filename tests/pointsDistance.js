import { expect } from 'chai'
import { pointsDistance } from "../src"

function test_pointsDistance (info, p0, p1, expected) {
  it(info, function (done) {
    expect(pointsDistance(p0, p1)).to.be.equal(expected)
    done()
  })
}

describe('TEST pointsDistance', function () {
  test_pointsDistance('{x: 0, y: 0}, {x: 0, y: 0}: 0', {x: 0, y: 0}, {x: 0, y: 0}, 0)
  test_pointsDistance('{x: 10, y: 0}, {x: 0, y: 0}: 10', {x: 10, y: 0}, {x: 0, y: 0}, 10)
  test_pointsDistance('{x: 10, y: 10}, {x: 0, y: 0}: 14.142135623730951', {x: 10, y: 10}, {x: 0, y: 0}, 14.142135623730951)
  test_pointsDistance('{x: 15, y: 20}, {x: 40, y: 35}: 29.154759474226502', {x: 15, y: 20}, {x: 40, y: 35}, 29.154759474226502)
})
