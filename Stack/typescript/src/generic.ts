export function show() {
  function showInfo<T>(x : T) : T {
    return x;
  }
  console.log(showInfo<boolean>(true));
  console.log(showInfo<string>('this is string'));
  console.log(showInfo<number>(1));
  console.log(showInfo<number[]>([1]));
  console.log(showInfo<string[]>(['a']));
}
export class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}