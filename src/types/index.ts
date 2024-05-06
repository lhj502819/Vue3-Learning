//定义一个接口，用于限制Person对象的具体属性
export interface IPerson {
    name: string;
    age: number;
    city: string,
    address?: string
}

//一个自定义类型
export type Persons = Array<IPerson>
export type Persons2 = IPerson[]