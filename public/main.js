import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { ResourceApp } from './interfaces/Resource.js';
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List Template Instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
let docTwo = addUID;
const docThree = {
    uid: 1,
    resourceName: ResourceApp.PRODUCT,
    data: { name: 'shaun' }
};
const docFour = {
    uid: 2,
    resourceName: ResourceApp.AGE,
    data: ['bread', 'milk', 'toilet roll']
};
console.log(docThree, docFour);
