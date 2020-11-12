type FuncParameterType<T> = T extends (...args: infer A) => any ? A : unknown;
type INew = <T extends (...args: any[]) => any>(func: T, ...args: FuncParameterType<T>) => ReturnType<T> extends (Object | Function) ? ReturnType<T> : Object; 
export const myNew:INew = function (func, ...args) {
  let res: {__proto__?: typeof func.prototype} = {};
  res.__proto__ = func.prototype;
  // if(func.prototype !== null) {
  //   Object.assign(res, {__proto__: func.prototype});
  // }
  let func_res =  func.apply(res, args);
  if(func_res instanceof Object || func_res instanceof Function) {
    return func_res;
  }
  return res;
}

