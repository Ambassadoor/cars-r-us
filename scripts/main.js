import { Selection } from "./Selection.js"
import { onSelect, onSubmit } from "./currentOrder.js"
import { Submit } from "./Submit.js"

const interiorSelection = await Selection("interior")
const paintSelection = await Selection("paint")
const technologySelection = await Selection("technology")
const wheelSelection = await Selection("wheel")
const submitButton = Submit();


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
    `

    body.innerHTML = html
    document.addEventListener("change", onSelect)
    document.querySelector("#submitOrder").addEventListener("click", onSubmit)
    document.addEventListener("orderSubmitted", render)
}


render()