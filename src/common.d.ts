// 提取 This 的类型：若不存在 this 参数，则为 unknown
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown;
// 返回 去除函数对象的 this 参数后的 函数类型
type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;

declare interface Function {
  myCall: <T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A) => R;
  myApply: <T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args?: A) => R;
  // bind 定义 传入参数个数从0 - 4 个分别进行定义
  // 当 bind 仅传入 thisArgs 参数时，需要将函数类型的定义传递下去
  mybind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;
  // bind 传入 1 - 4 个参数时的类型传递
  mybind<T , A0, A extends any, R>(this: (this: T, arg0: A0, ...args: A) => R, thisArg: T, arg0: A0): (...args: A) => R;
  mybind<T , A0, A1, A extends any, R>(this: (this: T, arg0: A0, arg1: A1, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1): (...args: A) => R;
  mybind<T , A0, A1, A2, A3, A extends any, R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3,): (...args: A) => R;
  mybind<T , A0, A1, A2, A extends any, R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2): (...args: A) => R;
  // mybind<T , AX extends any[], R>(this: (this: T, ...args: AX) => R, thisArgs: T, ...args: AX): (...args: AX) => R;
  mybind<T, AX, R>(this: (this: T, ...args: AX[]) => R, thisArg: T, ...args: AX[]): (...args: AX[]) => R;
}
