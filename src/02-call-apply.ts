// call / apply 调用: 指定一个 this 进行调用
// fun.call(thisArg, arg1, arg2, ...)
// fun.apply(thisArg, [argsArray])

export const MixIn = function () {
  Function.prototype.myCall = function (thisArg: IThisObj, ...argsArray: any[]) {
    thisArg.fn = this;
    let res = thisArg.fn(...argsArray);
    delete thisArg.fn;
    return res;
  }
  Function.prototype.myApply = function (thisArg: IThisObj, argsArray: any[] = []) {
    thisArg.fn = this;
    let res = thisArg.fn(...argsArray);
    delete thisArg.fn;
    return res;
  }
}
