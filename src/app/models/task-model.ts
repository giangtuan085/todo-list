import { Priority } from "../constants/constant";

export interface Task {
    id: number;
    title: string;
    description?: string;
    dueDate: any;
    priority: Priority;
    show: boolean;
}

export interface OptionModel<T = string> {
    value: T;
    label: string;
}