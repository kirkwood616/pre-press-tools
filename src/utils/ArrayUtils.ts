export function arrayMove(
  arr: Array<unknown>,
  fromIndex: number,
  toIndex: number
): void {
  const element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}
