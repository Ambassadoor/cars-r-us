import { Selection } from "./Selection.js"

export const Paint = async () => {
    const selection = await Selection("paints")

    let html = `
    <div class="select paint">
        <h2>Paint</h2>
        ${selection}
    </div>
    `

    return html
}