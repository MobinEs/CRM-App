export class Create {
    isExpirable: boolean = false;
    isActive: boolean = true;

    expireDateTime: string = new Date().toISOString();
    serviceId: string = '0';
    ticketTypeId: string = '0';
    priorityId: string = '0';
    title: string = '';
    description: string = '';
    departmentId: string = '0';
    file: any;
}
