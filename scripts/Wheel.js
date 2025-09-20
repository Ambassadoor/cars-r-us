import { Selection } from "./Selection.js"

export const Wheel = async () => {
    const selection = await Selection("wheels")

    let html = `
    <div class="select wheel">
        <h2>Wheel</h2>
        ${selection}
    </div>
    `

    return html
}