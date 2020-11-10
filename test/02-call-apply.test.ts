import { MixIn } from '../src/02-call-apply';
MixIn();
let obj = {
  a: 1
}
function fn() {
  // @ts-ignore
  return this.a;
}

test('hello world test', () => {
  // console.log(fn.myCall);
  expect(fn.myCall(obj)).toBe(1);
  expect(fn.myApply(obj)).toBe(1);
})