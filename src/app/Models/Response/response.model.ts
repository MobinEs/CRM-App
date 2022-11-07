import { Message } from "./message.model"

export class Response {
    information: Message[] = [];
    warnings: Message[] = [];
    errors: Message[] = [];
    result: number = 0;
    isSuccessFul: boolean = false;
    data: string = "";
}