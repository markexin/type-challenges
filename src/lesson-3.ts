// 11・元组转换为对象
// 将一个元组类型转换为对象类型，这个对象类型的键/值和元组中的元素对应。

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
type result = TupleToObject<typeof tuple> 

type TupleToObject<T extends readonly PropertyKey[]> = { 
    [P in T[number]]: P
}

// type TupleToObject<T> = {
//     [P in keyof T]: P
// }