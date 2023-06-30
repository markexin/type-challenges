// 实现Pick
interface Todo1 {
    title: string
    description: string
    completed: boolean
}
  
type TodoPreview = MyPick<Todo1, 'title' | 'completed'>

type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

const todo1: TodoPreview = {
    title: 'Clean room',
    completed: false,
}