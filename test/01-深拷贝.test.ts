import { deepCp } from '../src/01-深拷贝';

test('hello world test', () => {
  let str = '123',
      obj = {
        a: 1,
        b: 'b',
      };
  // 测试空数组
  expect(deepCp([])).toStrictEqual([]);
  // 纯数字数组
  expect(deepCp([1, 2, 3])).toStrictEqual([1, 2, 3]);
  // 数字与字符串的组合类型
  expect(deepCp([1, 2, '123', str, false])).toStrictEqual([1, 2, '123', str, false]);
  // 空对象
  expect(deepCp({})).toStrictEqual({});
  // 混合对象
  expect(deepCp(obj)).toStrictEqual(obj);
  // 混合自己
  expect(deepCp({hehe: 1234, nmb: obj})).toStrictEqual({hehe: 1234, nmb: obj});
})