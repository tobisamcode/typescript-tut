import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'



const InvoiceOne = new Invoice('mario', 'work on the mario website', 500);
const InvoiceTwo = new Invoice('maartins', 'work on the martins website', 300);

// console.log(InvoiceOne, InvoiceTwo);

let Invoices: Invoice[] = [];
Invoices.push(InvoiceOne);
Invoices.push(InvoiceTwo);

// InvoiceOne.client = 'yoshi';
InvoiceTwo.amount = 400;

Invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})






//              DOM                  

// const anchor = document.querySelector('a')!;

// console.log(anchor.href);

// const form = document.querySelector('form')!;

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);


// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
});