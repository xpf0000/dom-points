import { expect } from 'chai'
import { pointIsOnLine } from "../src"

function test_pointIsOnLine (info, p, line, expected) {
  it(info, function (done) {
    if (expected) {
      expect(pointIsOnLine(p, line)).to.be.true
    } else {
      expect(pointIsOnLine(p, line)).to.be.false
    }
    done()
  })
}

describe('TEST pointIsOnLine', function () {
  test_pointIsOnLine('{x: 0, y: 0}, [{x: 0, y: 0}, {x: 10, y: 0}]: true', {x: 0, y: 0}, [{x: 0, y: 0}, {x: 10, y: 0}], true)
  test_pointIsOnLine('{x: 5, y: 10}, [{x: 0, y: 10},{x: 10, y: 10}]: true', {x: 5, y: 10}, [{x: 0, y: 10},{x: 10, y: 10}], true)
  test_pointIsOnLine('{x: 0, y: 5}, [{x: 10, y: 0},{x: 10, y: 10}]: false', {x: 0, y: 5}, [{x: 10, y: 0},{x: 10, y: 10}], false)
  test_pointIsOnLine('{x: 0, y: 0}, [{x: 10, y: 0},{x: 0, y: 10}]: false', {x: 0, y: 0}, [{x: 10, y: 0},{x: 0, y: 10}], false)
  test_pointIsOnLine('{ x: 10, y: 23 }, [{ x: 5, y: 13 }, { x: 50, y: 103 }]: true', { x: 10, y: 23 }, [{ x: 5, y: 13 }, { x: 50, y: 103 }], true)
  test_pointIsOnLine('{ x: 10.005, y: 23 }, [{ x: 5, y: 13 }, { x: 50, y: 103 }]: false', { x: 10.005, y: 23 }, [{ x: 5, y: 13 }, { x: 50, y: 103 }], false)
})
