import { myNew } from '../src/04-new';

test('hello world test', () => {
  function Person(name: string, hehe: number) {
    // @ts-ignore
    this.a = 123;
  }
  let p1 = myNew(Person, 'zzxiongfan', 123);
  // expect(myNew())
  // console.log(p1);
  // console.log(p1 instanceof Person);
  expect(p1 instanceof Person).toBeTruthy();
})