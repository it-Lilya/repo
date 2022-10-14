export function dataTotal(data) {
  const result = data.sort((x, y) => (x.health < y.health ? 1 : -1));
  return result;
}
