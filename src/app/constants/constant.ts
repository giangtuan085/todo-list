import { animate, style, transition, trigger, state } from "@angular/animations";
import { OptionModel } from "../models/task-model";

export const GrowAnimation = trigger('openClose', [
    state('open', style({
        height: '82px',
        opacity: 1,
    })),
    state('closed', style({
        height: '0',
        opacity: 0.1,
        overflow: 'hidden'
    })),
    transition('open => closed', [
        animate('0.4s')
    ]),
    transition('closed => open', [
        animate('0.2s')
    ]),
])
export enum Priority {
    Low,
    Medium,
    High
}

export const PriorityList: OptionModel<Priority>[] = [
    {
        value: Priority.Low,
        label: 'Low'
    },
    {
        value: Priority.Medium,
        label: 'Medium'
    },
    {
        value: Priority.High,
        label: 'High'
    },
]