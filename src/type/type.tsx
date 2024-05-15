export interface IGroup{
    id: number;
    name: string;
    teacher: string;
    count: number;
}

export interface IStudent{
    id: number;
    name: string;
    surname: string;
    email: string;
    age: number;
    groupId: number;
}