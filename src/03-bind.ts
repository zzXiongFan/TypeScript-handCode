export const MixIn = function () {
  // 直接使用通用类型进行 实现
  Function.prototype.mybind = function <T, AX, R>(this: (this: T, ...args: AX[]) => R, thisArg: T, ...args: AX[]): (...args: AX[]) => R {
    // 使用 自执行函数 构建闭包
    let rec_args = args;
    let ctx = this;
    let resFn: (...args: AX[]) => R = function(...args: AX[]): R {
      // 这个地方实在是绕不开了
      // @ts-ignore
      return ctx.apply(this instanceof resFn ? this : thisArg, [...rec_args, ...args]);
    }

    resFn.prototype = Object.create(this.prototype);
    return resFn
  }
}