type Result3 = Concat<[1], [2]> // expected to be [1, 2]


type Concat<S extends number[], T extends number[]> = [...S, ...T]