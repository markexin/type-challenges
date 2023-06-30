type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'


type MyExclude<S, T> = S extends T ? never : S;