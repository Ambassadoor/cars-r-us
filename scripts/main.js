import { onSelect, onSubmit } from "./currentOrder.js"
import { Submit } from "./Submit.js"
import { Paint } from "./Paint.js";
import { Orders } from "./Orders.js"
import { Interior } from "./Interior.js";
import { Technology} from "./Technology.js"
import { Wheel } from "./Wheel.js";




/**
 * Updates the body of the webpage
 */
export const render = async () => {
    const body = document.querySelector("body")

    const interior = await Interior()
    const paint = await Paint()
    const technology = await Technology()
    const wheel = await Wheel()

const submitButton = Submit();
const orders = await Orders();

    const html = `
        <header><h1>Cars-R-Us</h1></header>
        <article class="selections">
            <section class="selections__inputs">
                ${interior}
                ${paint}
                ${technology}
                ${wheel}   
            </section>
            <section class="selections__submit">
                ${submitButton}
            </section>     
        </article>
        <aside class="orders">
            ${orders}
        </aside>
    `

    body.innerHTML = html
    document.addEventListener("change", onSelect)
    document.querySelector("#submitOrder").addEventListener("click", onSubmit)

}

    document.addEventListener("orderSubmitted", render)


render()