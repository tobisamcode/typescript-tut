// enums

export enum ResourceApp { NAME, AGE, GENDER, PRODUCT, COLOUR }; 

export interface Resource <T> {
    uid: number;
    resourceName: ResourceApp;
    data: T;
}

