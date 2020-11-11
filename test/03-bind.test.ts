import { MixIn } from '../src/03-bind';
MixIn();
let obj = {
  a: 1
}
function fn() {
  // @ts-ignore
  return this.a;
}

function add(a1: number, a2: number, a3: number, a4: number, a5: number, a6: number, ) {
  return a1 + a2 + a3 + a4 + a5 + a6;
}

test('hello world test', () => {
  let test = add.mybind(null, 1, 1, 1, 1, 1);
  expect(test(1)).toBe(6);
})