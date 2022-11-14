export class Create {
    isExpirable: boolean = false;
    isActive: boolean = true;

    expireDateTime: string = new Date().toISOString();
    serviceId: any = null;
    ticketTypeId: any = null;
    priorityId: any = null;
    title: string = '';
    description: string = '';
    departmentId: any = null;
    file: any;
}
