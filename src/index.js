/**
 * 求点P绕中心点Center旋转deg角度后的新坐标
 * @param center
 * @param p
 * @param deg
 * @returns {{x: number, y: number}}
 */
function rotatePoint (center = { x: 0, y: 0 }, p = { x: 0, y: 0 }, deg) {
  let hd = 2 * Math.PI / 360 * deg
  let cos = Math.cos(hd)
  let sin = Math.sin(hd)
  let x0 = (p.x - center.x) * cos - (p.y - center.y) * sin + center.x
  let y0 = (p.x - center.x) * sin + (p.y - center.y) * cos + center.y
  return { x: x0, y: y0 }
}
/**
 * 点是否在线段上
 * @param p
 * @param line
 * @returns {boolean|boolean}
 */
function pointIsOnLine (p = {x: 0, y: 0}, line = [{x: 0, y: 0}, {x: 0, y: 0}]) {
  let p0 = line[0]
  let p1 = line[1]
  let d = (pointsDistance(p, p0) + pointsDistance(p, p1)) - pointsDistance(p0, p1)
  return d >= 0 && d < 0.0000001
}
/**
 * 点是否在多边形内部
 * @param checkPoint
 * @param polygonPoints
 * @returns {boolean}
 */
function pointIsInPolygon (checkPoint, polygonPoints) {
  let counter = 0
  let i
  let xinters
  let p1, p2
  let pointCount = polygonPoints.length
  p1 = polygonPoints[0]

  for (i = 1; i <= pointCount; i++) {
    p2 = polygonPoints[i % pointCount]
    if (pointIsOnLine(checkPoint, [p1, p2])) {
      return true
    }
    if (
      checkPoint.x >= Math.min(p1.x, p2.x) &&
      checkPoint.x <= Math.max(p1.x, p2.x)
    ) {
      if (checkPoint.y <= Math.max(p1.y, p2.y)) {
        if (p1.x !== p2.x) {
          xinters =
            ((checkPoint.x - p1.x) * (p2.y - p1.y)) / (p2.x - p1.x) +
            p1.y
          if (p1.y === p2.y || checkPoint.y <= xinters) {
            counter++
          }
        }
      }
    }
    p1 = p2
  }
  if (counter % 2 === 0) {
    return false
  } else {
    return true
  }
}
/**
 * 多边形是否在另一个多边形内部
 * @param checkPoints
 * @param polygonPoints
 * @returns {boolean}
 */
function polygonIsInPolygon (checkPoints, polygonPoints) {
  let is = true
  for (let point of checkPoints) {
    if (!pointIsInPolygon(point, polygonPoints)) {
      is = false
      break
    }
  }
  return is
}
/**
 * 点和直线的交点
 * @param p
 * @param line
 */
function pointToLineCross (p = { x: 0, y: 0 }, line = [{ x: 0, y: 0 }, { x: 0, y: 0 }]) {
  let P = {}
  let p1 = line[0]
  let p2 = line[1]
  // 如果p1.x==p2.x 说明是条竖着的线
  if (p1.x - p2.x === 0) {
    P.x = p1.x
    P.y = p.y
  } else {
    let A = (p1.y - p2.y) / (p1.x - p2.x)
    let B = p1.y - A * p1.x
    let m = p.x + A * p.y
    P.x = (m - A * B) / (A * A + 1)
    P.y = A * P.x + B
  }
  return P
}
/**
 * 点和直线的距离
 * @param p
 * @param line
 */
function pointToLineDistance (p = { x: 0, y: 0 }, line = [{ x: 0, y: 0 }, { x: 0, y: 0 }]) {
  let len
  let p1 = line[0]
  let p2 = line[1]
  // 如果p1.x==p2.x 说明是条竖着的线
  if (p1.x - p2.x === 0) {
    len = Math.abs(p.x - p1.x)
  } else {
    var A = (p1.y - p2.y) / (p1.x - p2.x)
    var B = p1.y - A * p1.x
    len = Math.abs((A * p.x + B - p.y) / Math.sqrt(A * A + 1))
  }
  return len
}
/**
 * 两点之间的直线距离
 * @param p1
 * @param p2
 * @returns {number}
 */
function pointsDistance (p1 = { x: 0, y: 0 }, p2 = { x: 0, y: 0 }) {
  let dx = Math.abs(p2.x - p1.x)
  let dy = Math.abs(p2.y - p1.y)
  let dis = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
  return dis
}
/**
 * 换算CSS transform的matrix到角度
 * @param matrix
 * @returns {number}
 */
function matrixToDeg (matrix) {
  let arr = matrix.replace('matrix(', '').replace(')', '').split(', ')
  let a = arr[0]
  let b = arr[1]
  let angle = parseFloat((Math.atan2(b, a) * (180 / Math.PI)).toFixed(4))
  return angle || 0
}
/**
 * dom相对于屏幕的旋转角度
 * @param dom
 * @returns {number}
 */
function clientDeg (dom) {
  let deg = 0
  try {
    let style = getComputedStyle(dom, null)
    let transform = style.getPropertyValue('transform')
    deg = matrixToDeg(transform)
    if (dom.parentNode) {
      deg += clientDeg(dom.parentNode)
    }
  } catch (e) {
  }
  deg = deg % 360
  if (deg < 0) {
    deg = deg + 360
  }
  return deg
}
/**
 * 获取dom中心点坐标
 * @param dom
 * @returns {{x: number, y: number}}
 */
function clientCenterPoint (dom, test = false) {
  let bounds = dom.getBoundingClientRect()
  let scrollLeft = document.documentElement.scrollLeft
  let scrollTop = document.documentElement.scrollTop
  let center = {
    x: bounds.left + scrollLeft + bounds.width * 0.5,
    y: bounds.top + scrollTop + bounds.height * 0.5
  }
  if (test) {
    let centerDom = document.createElement('div')
    centerDom.style.cssText = `position:absolute;width:3px;height:3px;left:${center.x - 1}px;top:${center.y - 1}px;background: #000;`
    document.body.appendChild(centerDom)
  }
  return center
}
/**
 * 获取dom四个角点原始坐标-未旋转的
 * @param dom
 * @returns {[{x, y}, {x, y}, {x, y}, {x, y}]}
 */
function clientOriginalPoints (dom, test = false) {
  let size = domExactSize(dom)
  let halfWidth = size.width * 0.5
  let halfHeight = size.height * 0.5
  let center = clientCenterPoint(dom, test)
  let points = [
    {
      x: center.x - halfWidth,
      y: center.y - halfHeight
    },
    {
      x: center.x + halfWidth,
      y: center.y - halfHeight
    },
    {
      x: center.x + halfWidth,
      y: center.y + halfHeight
    },
    {
      x: center.x - halfWidth,
      y: center.y + halfHeight
    }
  ]
  if (test) {
    for (let p of points) {
      let pointDom = document.createElement('div')
      pointDom.style.cssText = `position:absolute;width:3px;height:3px;left:${p.x - 1}px;top:${p.y - 1}px;background: #000;`
      document.body.appendChild(pointDom)
    }
  }
  return points
}
/**
 * dom四个角点坐标
 * @param dom
 * @param test
 * @returns {[]}
 */
function clientBoundsPoints (dom, test = false) {
  let realdeg = clientDeg(dom)
  let center = clientCenterPoint(dom, test)
  let originalPoints = clientOriginalPoints(dom, test)
  let points = []
  for (let p of originalPoints) {
    points.push(rotatePoint(center, p, realdeg))
  }
  if (test) {
    for (let p of points) {
      let pointDom = document.createElement('div')
      pointDom.style.cssText = `position:absolute;width:3px;height:3px;left:${p.x - 1}px;top:${p.y - 1}px;background: #000;`
      document.body.appendChild(pointDom)
    }
  }
  return points
}
/**
 * 页面dom相对todom的位置
 * @param dom
 * @param todom
 * @returns {{top: number, left: number, bottom: number, width: number, right: number, height: number}}
 */
function rectBoundsToRect (dom, todom, test = false) {
  let left, top, right, bottom, width, height
  let domPoints = clientBoundsPoints(dom)
  let deg = clientDeg(dom)
  let todeg = clientDeg(todom)
  let relativeDeg = deg - todeg
  let todomCenter = clientCenterPoint(todom, test)
  let todomRotatePoints = clientOriginalPoints(todom, test)
  let domRotatePoints = []
  for (let p of domPoints) {
    domRotatePoints.push(rotatePoint(todomCenter, p, -todeg))
  }
  if (test) {
    for (let p of domRotatePoints) {
      let pointDom = document.createElement('div')
      pointDom.style.cssText = `position:absolute;width:3px;height:3px;left:${p.x - 1}px;top:${p.y - 1}px;background: #000;`
      document.body.appendChild(pointDom)
    }
  }
  let todomTop = todomRotatePoints[0].y
  let todomRight = todomRotatePoints[1].x
  let todomBottom = todomRotatePoints[2].y
  let todomLeft = todomRotatePoints[3].x
  top = Math.min(
    domRotatePoints[0].y - todomTop,
    domRotatePoints[1].y - todomTop,
    domRotatePoints[2].y - todomTop,
    domRotatePoints[3].y - todomTop
  )
  right = Math.min(
    todomRight - domRotatePoints[0].x,
    todomRight - domRotatePoints[1].x,
    todomRight - domRotatePoints[2].x,
    todomRight - domRotatePoints[3].x
  )
  bottom = Math.min(
    todomBottom - domRotatePoints[0].y,
    todomBottom - domRotatePoints[1].y,
    todomBottom - domRotatePoints[2].y,
    todomBottom - domRotatePoints[3].y
  )
  left = Math.min(
    domRotatePoints[0].x - todomLeft,
    domRotatePoints[1].x - todomLeft,
    domRotatePoints[2].x - todomLeft,
    domRotatePoints[3].x - todomLeft
  )
  width = Math.max(
    Math.abs(domRotatePoints[0].x - domRotatePoints[2].x),
    Math.abs(domRotatePoints[1].x - domRotatePoints[3].x)
  )
  height = Math.max(
    Math.abs(domRotatePoints[0].y - domRotatePoints[2].y),
    Math.abs(domRotatePoints[1].y - domRotatePoints[3].y)
  )
  let bounds = {
    left: left,
    top: top,
    right: right,
    bottom: bottom,
    width: width,
    height: height,
    deg: relativeDeg
  }
  if (test) {
    let rect = document.createElement('div')
    rect.style.cssText = `position:absolute;width:${width}px;height:${height}px;left:${left}px;top:${top}px;background: rgba(0,0,0,0.4);`
    todom.appendChild(rect)
  }
  return bounds
}

/**
 * 获取dom精确宽高
 * @param dom
 */
function domExactSize(dom) {
  let style = window.getComputedStyle(dom, false)
  let width = parseFloat(style['width'])
  let height = parseFloat(style['height'])
  if (style['box-sizing'] === 'content-box') {
    let paddingLeft = parseFloat(style['padding-left'])
    let paddingRight = parseFloat(style['padding-right'])
    let borderLeft = parseFloat(style['border-left'])
    let borderRight = parseFloat(style['border-right'])
    width += paddingLeft + paddingRight + borderLeft + borderRight

    let paddingTop = parseFloat(style['padding-top'])
    let paddingBottom = parseFloat(style['padding-bottom'])
    let borderTop = parseFloat(style['border-top'])
    let borderBottom = parseFloat(style['border-bottom'])
    height += paddingTop + paddingBottom + borderTop + borderBottom
  }
  return {width: width, height: height}
}

export {
  rotatePoint,
  pointIsInPolygon,
  polygonIsInPolygon,
  pointToLineCross,
  pointToLineDistance,
  pointsDistance,
  matrixToDeg,
  clientDeg,
  clientCenterPoint,
  clientOriginalPoints,
  clientBoundsPoints,
  rectBoundsToRect,
  pointIsOnLine,
  domExactSize
}
