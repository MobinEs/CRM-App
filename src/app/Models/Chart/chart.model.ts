import { Item } from "./item.model";

export class Chart {
    id: string = "";
    name: string = "";
    description: string = "";
    chartType: string = "";
    minValue: number = 0;
    maxValue: number = 0;
    isActive: boolean = true;
    ordering: number = 0;
    insertDateTime: Date = new Date();
    items: Item[] = [];

}