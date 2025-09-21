import { Selection } from "./Selection.js";

export const Vehicle = async () => {
    const selection = await Selection("vehicles")

    let html = `
        <div class="select vehicle">
            <h2>Vehicle Type</h2>
            ${selection}
        </div>
    `

    return html
}