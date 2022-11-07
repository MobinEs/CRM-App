import { ItemDetail } from "./item-detail.model";

export class Item {
    id: string = "";
    reportId: string = "";
    name: string = "";
    color: string = "";
    isActive: boolean = true;
    ordering: number = 0
    itemDetails: ItemDetail[] = [];

}