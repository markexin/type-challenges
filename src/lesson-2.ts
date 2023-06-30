// 7・对象属性只读
interface Todo2 {
    title: string
    description: string
} 

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};


const todo2: MyReadonly<Todo2> = {
    title: "Hey",
    description: "foobar"
}


// todo2.title = "Hello" // Error: cannot reassign a readonly property
// todo2.description = "barFoo" // Error: cannot reassign a readonly todo2