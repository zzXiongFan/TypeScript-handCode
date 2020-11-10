declare interface Function {
  myCall: <T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A) => R;
  myApply: <T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args?: A) => R;
}
