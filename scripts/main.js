import { Selection } from "./Selection.js"
import { onSelect, onSubmit } from "./currentOrder.js"
import { Submit } from "./Submit.js"
import { Orders } from "./Orders.js"

const interiorSelection = await Selection("interiors")
const paintSelection = await Selection("paints")
const technologySelection = await Selection("technologies")
const wheelSelection = await Selection("wheels")
const submitButton = Submit();
const orders = await Orders();


/**
 * Updates the body of the webpage
 */
export const render = async () => {
    const body = document.querySelector("body")


    const html = `
        ${interiorSelection}
        ${paintSelection}
        ${technologySelection}
        ${wheelSelection}
        ${submitButton}
        ${orders}
    `

    body.innerHTML = html
    document.addEventListener("change", onSelect)
    document.querySelector("#submitOrder").addEventListener("click", onSubmit)
    document.addEventListener("orderSubmitted", render)
}


render()