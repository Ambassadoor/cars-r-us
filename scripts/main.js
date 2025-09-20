import { Selection } from "./Selection.js"
import { onSelect } from "./currentOrder.js"

const interiorSelection = await Selection("interior")
const paintSelection = await Selection("paint")
const technologySelection = await Selection("technology")
const wheelSelection = await Selection("wheel")


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
    `

    body.innerHTML = html
    document.addEventListener("change", onSelect)
}


render()