

export function isInsideCircle(x, y, cx, cy, radius) {
  const distance = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
  return distance < radius;
}