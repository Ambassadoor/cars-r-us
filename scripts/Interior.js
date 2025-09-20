import { Selection } from "./Selection.js"

export const Interior = async () => {
    const selection = await Selection("interiors")

    let html = `
    <div class="select interior">
        <h2>Interior</h2>
        ${selection}
    </div>
    `

    return html
}