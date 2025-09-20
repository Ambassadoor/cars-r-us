import { Selection } from "./Selection.js"

export const Technology = async () => {
    const selection = await Selection("technologies")

    let html = `
    <div class="select technology">
        <h2>Technology</h2>
        ${selection}
    </div>
    `

    return html
}