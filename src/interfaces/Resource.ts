interface Resource <T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource <object> = {
    uid: 1,
    resourceName: 'person',
    data: {name: 'shaun'}
}

const docFour: Resource <string[]> = {
    uid: 2,
    resourceName: 'soppingList',
    data: ['bread', 'milk', 'toilet roll']
}