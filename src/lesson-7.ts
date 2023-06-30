type ExampleType = Promise<string>

type Result2 = MyAwaited<ExampleType> // string

type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never;