// call / apply 调用: 指定一个 this 进行调用
// fun.call(thisArg, arg1, arg2, ...)
// fun.apply(thisArg, [argsArray])

export const MixIn = function () {
  Function.prototype.myCall = function <T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R {
    let temp: T & {fn ?: typeof this} = Object.assign(thisArg, { fn: this});
    let res = (temp.fn!)(...args);
    delete temp.fn;
    return res;
  }
  Function.prototype.myApply = function <T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args?: A): R {
    let temp: T & {fn ?: typeof this} = Object.assign(thisArg, { fn: this});
    let res = (temp.fn!)(...args as A);
    delete temp.fn;
    return res;
  }
}
