declare interface Function {
  myCall: (thisArg: IThisObj, ...argsArray: any[]) => any;
  myApply: (thisArg: IThisObj, argsArray?: any[]) => any;
}

declare interface IThisObj extends Object {
  fn?: Function
}