const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]


// type MyParameters<T extends (...args: any[]) => any> = T extends (...any: infer S) => any ? S : any 
type MyParameters<T extends (...args: any[]) => any> = T extends (...unknown: infer S) => unknown ? S : unknown 