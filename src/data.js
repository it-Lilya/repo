// eslint-disable-next-line import/prefer-default-export
export function dataTotal(_data) {
  const result = _data.sort((x, y) => (x.health < y.health ? 1 : -1));
  return result;
}
